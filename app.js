const levels = [
  { x: .668, y: .536, name: "Birdhouse Village" },
  { x: .416, y: .540, name: "Sushi Shuffle" },
  { x: .916, y: .500, name: "Neon Night" },
  { x: .672, y: .560, name: "Secret Garden" },
  { x: .200, y: .204, name: "Toy Carnival" },
  { x: .800, y: .840, name: "Busy Harbor" },
  { x: .148, y: .532, name: "Old Library" },
  { x: .872, y: .160, name: "Owl Crowd" },
  { x: .172, y: .816, name: "Night Owls" },
  { x: .920, y: .512, name: "Rainbow Owls" },
  { x: .292, y: .144, name: "Inventor's Attic" },
  { x: .808, y: .828, name: "Midnight Study" },
  { x: .888, y: .360, name: "Enchanted Archive" },
  { x: .144, y: .144, name: "Creative Studio" },
  { x: .900, y: .776, name: "Maker Lab" }
].map((level, index) => ({ ...level, image: `assets/levels/${String(index + 1).padStart(2, "0")}.webp` }));

const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
const state = {
  level: Math.min(Number(localStorage.getItem("cat-current")) || 0, levels.length - 1),
  unlocked: Math.min(Number(localStorage.getItem("cat-unlocked")) || 0, levels.length - 1),
  scores: JSON.parse(localStorage.getItem("cat-scores") || "{}"),
  hearts: 3, hints: 3, startedAt: 0, elapsed: 0, timerId: null,
  solved: false, sound: localStorage.getItem("cat-sound") !== "off",
  scale: 1, panX: 0, panY: 0, dragging: false, moved: false, pointerX: 0, pointerY: 0
};

const imageStage = $("#imageStage");
const puzzleImage = $("#puzzleImage");
const imageFrame = $("#imageFrame");
const answerRing = $("#answerRing");
const hintLens = $("#hintLens");

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("is-active", screen.id === id));
  if (id !== "gameScreen") stopTimer();
}

function save() {
  localStorage.setItem("cat-current", state.level);
  localStorage.setItem("cat-unlocked", state.unlocked);
  localStorage.setItem("cat-scores", JSON.stringify(state.scores));
}

function renderHome() {
  const completed = Object.keys(state.scores).length;
  $("#continueNote").textContent = completed ? `${completed} of ${levels.length} puzzles completed` : "Progress saves automatically";
  $("#startSoundButton").textContent = state.sound ? "♪" : "×";
}

function renderLevels() {
  const grid = $("#levelGrid");
  grid.innerHTML = levels.map((level, index) => {
    const locked = index > state.unlocked;
    const stars = state.scores[index]?.stars || 0;
    return `<button class="level-card ${locked ? "locked" : ""}" data-level="${index}" ${locked ? "disabled" : ""} aria-label="Level ${index + 1}: ${level.name}${locked ? ", locked" : ""}">
      <img src="${level.image}" alt="" loading="lazy"><span class="number">${index + 1}</span><span class="level-stars">${"★".repeat(stars)}${"☆".repeat(3-stars)}</span>
    </button>`;
  }).join("");
  $("#starTotal").textContent = Object.values(state.scores).reduce((sum, score) => sum + score.stars, 0);
  grid.querySelectorAll("[data-level]").forEach(button => button.addEventListener("click", () => startLevel(Number(button.dataset.level))));
  showScreen("levelScreen");
}

function startLevel(index) {
  state.level = index; state.hearts = 3; state.hints = 3; state.solved = false; state.elapsed = 0;
  resetView(); save(); showScreen("gameScreen");
  $("#levelLabel").textContent = `LEVEL ${index + 1} · ${levels[index].name.toUpperCase()}`;
  $("#progressFill").style.width = `${(index / levels.length) * 100}%`;
  answerRing.classList.remove("show"); hintLens.classList.remove("show");
  placeMarker(answerRing); placeMarker(hintLens);
  updateHearts(); updateHints();
  $("#loadingCard").classList.remove("is-hidden");
  puzzleImage.onload = () => {
    $("#loadingCard").classList.add("is-hidden");
    state.startedAt = Date.now(); startTimer();
  };
  puzzleImage.src = levels[index].image;
  puzzleImage.alt = `Level ${index + 1}: ${levels[index].name}. Find the hidden cat.`;
  if (puzzleImage.complete) puzzleImage.onload();
  const next = levels[index + 1]; if (next) new Image().src = next.image;
}

function placeMarker(element) {
  const level = levels[state.level];
  element.style.left = `${level.x * 100}%`; element.style.top = `${level.y * 100}%`;
}

function updateHearts() {
  $("#hearts").innerHTML = [0,1,2].map(i => `<span class="heart ${i >= state.hearts ? "lost" : ""}">♥</span>`).join("");
  $("#hearts").setAttribute("aria-label", `${state.hearts} lives remaining`);
}
function updateHints() { $("#hintCount").textContent = `${state.hints} left`; $("#hintButton").disabled = !state.hints || state.solved; }

function startTimer() {
  stopTimer(); updateTimer(); state.timerId = setInterval(updateTimer, 1000);
}
function stopTimer() { if (state.timerId) clearInterval(state.timerId); state.timerId = null; }
function updateTimer() { if (!state.solved) state.elapsed = Math.floor((Date.now() - state.startedAt) / 1000); $("#timer").textContent = formatTime(state.elapsed); }
function formatTime(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`; }

function imageCoordinates(event) {
  const rect = puzzleImage.getBoundingClientRect();
  const renderedRatio = puzzleImage.naturalWidth / puzzleImage.naturalHeight;
  const boxRatio = rect.width / rect.height;
  let width = rect.width, height = rect.height, left = rect.left, top = rect.top;
  if (boxRatio > renderedRatio) { width = height * renderedRatio; left += (rect.width - width) / 2; }
  else { height = width / renderedRatio; top += (rect.height - height) / 2; }
  return { x: (event.clientX - left) / width, y: (event.clientY - top) / height };
}

function handleGuess(event) {
  if (state.solved || state.dragging || state.moved) return;
  const p = imageCoordinates(event); if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return;
  const target = levels[state.level];
  const distance = Math.hypot((p.x - target.x) * 1.1, p.y - target.y);
  if (distance < .065) solveLevel(); else wrongGuess(event.clientX, event.clientY);
}

function wrongGuess(x, y) {
  state.hearts--; updateHearts(); tone("wrong");
  const mark = document.createElement("i"); mark.className = "miss-mark"; mark.style.left = `${x}px`; mark.style.top = `${y}px`; document.body.append(mark); setTimeout(() => mark.remove(), 600);
  if (state.hearts <= 0) {
    answerRing.classList.add("show"); toast("There it is! Try this level again."); stopTimer();
    setTimeout(() => startLevel(state.level), 2100);
  } else toast(state.hearts === 1 ? "Careful — one heart left!" : "Not there. Keep looking!");
}

function solveLevel() {
  state.solved = true; stopTimer(); answerRing.classList.add("show"); tone("win"); confetti();
  const stars = state.hearts === 3 ? 3 : state.hearts === 2 ? 2 : 1;
  const previous = state.scores[state.level];
  state.scores[state.level] = { stars: Math.max(stars, previous?.stars || 0), best: Math.min(state.elapsed, previous?.best ?? Infinity) };
  state.unlocked = Math.max(state.unlocked, Math.min(state.level + 1, levels.length - 1)); save();
  $("#progressFill").style.width = `${((state.level + 1) / levels.length) * 100}%`;
  setTimeout(() => showResult(stars), 800);
}

function showResult(stars) {
  $("#resultTime").textContent = formatTime(state.elapsed);
  $("#resultStars").textContent = "★".repeat(stars) + "☆".repeat(3-stars);
  const last = state.level === levels.length - 1;
  $("#resultTitle").textContent = last ? "You found them all!" : "You found the cat!";
  $("#resultMessage").textContent = last ? "Every sneaky cat has been discovered." : ["Sharp eyes! That cat almost fooled us.","Meow-nificent detective work!","A perfect little discovery!"][state.level % 3];
  $("#nextButton span").textContent = last ? "Play again" : "Next level";
  $("#successModal").classList.add("show"); $("#successModal").setAttribute("aria-hidden", "false");
}
function hideResult() { $("#successModal").classList.remove("show"); $("#successModal").setAttribute("aria-hidden", "true"); }

function useHint() {
  if (!state.hints || state.solved) return;
  state.hints--; updateHints(); hintLens.classList.remove("show"); void hintLens.offsetWidth; hintLens.classList.add("show"); tone("hint");
  toast(state.hints ? "Search inside the glowing area" : "Last hint used — look closely!");
  setTimeout(() => hintLens.classList.remove("show"), 3300);
}

function setZoom(value) {
  state.scale = Math.min(3, Math.max(1, value)); if (state.scale === 1) { state.panX = 0; state.panY = 0; }
  imageStage.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.scale})`;
}
function resetView() { state.scale = 1; state.panX = 0; state.panY = 0; imageStage.style.transform = ""; }

function toast(message) { const el = $("#toast"); el.textContent = message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 1800); }
function tone(type) {
  if (!state.sound) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext; if (!AudioContext) return;
  const ctx = tone.ctx ||= new AudioContext(); const notes = type === "win" ? [523,659,784] : type === "hint" ? [440,660] : [170,120];
  notes.forEach((frequency, i) => { const oscillator = ctx.createOscillator(), gain = ctx.createGain(); oscillator.connect(gain).connect(ctx.destination); oscillator.frequency.value = frequency; oscillator.type = type === "wrong" ? "sawtooth" : "sine"; gain.gain.setValueAtTime(.08, ctx.currentTime + i*.11); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .17 + i*.11); oscillator.start(ctx.currentTime + i*.11); oscillator.stop(ctx.currentTime + .2 + i*.11); });
}
function confetti() {
  const colors = ["#ffd84d","#ff6b6b","#55ddb4","#7656f7","#4ec5ff"];
  for (let i=0;i<34;i++) { const piece=document.createElement("i"); piece.className="confetti"; piece.style.left=`${Math.random()*100}%`; piece.style.background=colors[i%colors.length]; piece.style.setProperty("--drift",`${(Math.random()-.5)*240}px`); piece.style.animationDelay=`${Math.random()*.35}s`; document.body.append(piece); setTimeout(()=>piece.remove(),2200); }
}

$("#playButton").addEventListener("click", () => startLevel(Math.min(state.unlocked, levels.length - 1)));
$("#levelsButton").addEventListener("click", renderLevels);
document.querySelectorAll('[data-action="home"]').forEach(button => button.addEventListener("click", () => { resetView(); renderHome(); showScreen("startScreen"); }));
$("#hintButton").addEventListener("click", useHint);
$("#zoomIn").addEventListener("click", () => setZoom(state.scale + .5));
$("#zoomOut").addEventListener("click", () => setZoom(state.scale - .5));
$("#zoomReset").addEventListener("click", resetView);
$("#nextButton").addEventListener("click", () => { hideResult(); startLevel(state.level === levels.length-1 ? 0 : state.level+1); });
$("#resultLevelsButton").addEventListener("click", () => { hideResult(); renderLevels(); });
$("#startSoundButton").addEventListener("click", () => { state.sound=!state.sound; localStorage.setItem("cat-sound",state.sound?"on":"off"); renderHome(); tone("hint"); });

imageFrame.addEventListener("pointerdown", event => { state.dragging = state.scale > 1; state.moved = false; state.pointerX = event.clientX; state.pointerY = event.clientY; if (state.dragging) imageFrame.setPointerCapture(event.pointerId); });
imageFrame.addEventListener("pointermove", event => { if (!state.dragging) return; const dx=event.clientX-state.pointerX, dy=event.clientY-state.pointerY; if (Math.abs(dx)+Math.abs(dy)>3) state.moved=true; state.panX += dx; state.panY += dy; state.pointerX=event.clientX; state.pointerY=event.clientY; setZoom(state.scale); });
imageFrame.addEventListener("pointerup", event => { const wasDragging=state.dragging; state.dragging=false; if (!wasDragging || !state.moved) handleGuess(event); setTimeout(()=>state.moved=false,0); });
imageFrame.addEventListener("dblclick", event => { event.preventDefault(); setZoom(state.scale > 1 ? 1 : 2); });
imageFrame.addEventListener("wheel", event => { event.preventDefault(); setZoom(state.scale + (event.deltaY < 0 ? .25 : -.25)); }, { passive: false });

renderHome();

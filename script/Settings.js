class Settings {
  constructor() {
    this.settingsKey = "gameSettings";
    this.volumeInput = document.getElementById("volume");
    this.difficultySelect = document.getElementById("difficulty");

    this.defaultSettings = {
      volume: 50,
      difficulty: "medium",
      enemyGenerateSpeed: 2000,
      enemyMoveSpeed: 2,
      scorePerEnemy: 2,
    };

    this.settings = this.loadSettings();
    this.applySettings();
    this.bindEvents();
  }

  loadSettings() {
    const storedSettings = localStorage.getItem(this.settingsKey);
    if (storedSettings) {
      return JSON.parse(storedSettings);
    } else {
      this.settings = { ...this.defaultSettings };
      this.saveSettings();
      return this.settings;
    }
  }

  applySettings() {
    this.volumeInput.value = this.settings.volume;
    this.difficultySelect.value = this.settings.difficulty;
  }

  saveSettings() {
    localStorage.setItem(this.settingsKey, JSON.stringify(this.settings));
  }

  bindEvents() {
    this.volumeInput.addEventListener("input", (e) => {
      this.settings.volume = parseInt(e.target.value, 10);
      this.saveSettings();
    });

    this.difficultySelect.addEventListener("change", (e) => {
      this.settings.difficulty = e.target.value;
      this.updateDifficultySettings();
      this.saveSettings();
    });
  }

  updateDifficultySettings() {
    switch (this.settings.difficulty) {
      case "easy":
        this.settings.enemyGenerateSpeed = 3000;
        this.settings.enemyMoveSpeed = 1;
        this.settings.scorePerEnemy = 1;
        break;
      case "medium":
        this.settings.enemyGenerateSpeed = 2000;
        this.settings.enemyMoveSpeed = 2;
        this.settings.scorePerEnemy = 2;
        break;
      case "hard":
        this.settings.enemyGenerateSpeed = 1000;
        this.settings.enemyMoveSpeed = 3;
        this.settings.scorePerEnemy = 3;
        break;
      case "iranMode":
        this.settings.enemyGenerateSpeed = 700;
        this.settings.enemyMoveSpeed = 4;
        this.settings.scorePerEnemy = 4;
        break;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Settings();
});


const AAuthInputs = document.querySelectorAll(
  ".a-auth-form-input label input, .b-auth-form-input label input"
);

if (AAuthInputs.length) {
  AAuthInputs.forEach((AInput) => {
    const ALabel = AInput.closest("label");

    if (!ALabel) return;

    AInput.addEventListener("focus", () => {
      ALabel.classList.add("active");
    });

    AInput.addEventListener("blur", () => {
      if (!AInput.value.trim()) {
        ALabel.classList.remove("active");
      }
    });
  });
}


function AInitConductRound(ABoxSelector, ARoundSelector) {
  const ABox = document.querySelector(ABoxSelector);
  const ARound = document.querySelector(ARoundSelector);

  if (!ABox || !ARound) return;

  const AStart = 36;
  let AIsDrag = false;

  const AMove = (AClientX) => {
    const ABoxRect = ABox.getBoundingClientRect();
    const ARoundWidth = ARound.offsetWidth;
    const AMax = ABox.offsetWidth - ARoundWidth;

    let ALeft =
      AClientX - ABoxRect.left - ARoundWidth / 2;

    ALeft = Math.max(AStart, Math.min(ALeft, AMax));

    ARound.style.left = `${ALeft}px`;
    ABox.style.setProperty(
      "--progress",
      `${ALeft + ARoundWidth}px`
    );
  };

  ARound.addEventListener("pointerdown", (AEvent) => {
    AIsDrag = true;
    ARound.setPointerCapture(AEvent.pointerId);
  });

  ARound.addEventListener("pointermove", (AEvent) => {
    if (!AIsDrag) return;
    AMove(AEvent.clientX);
  });

  ARound.addEventListener("pointerup", () => {
    AIsDrag = false;
  });

  ABox.addEventListener("click", (AEvent) => {
    AMove(AEvent.clientX);
  });
}

AInitConductRound(
  ".a-conduct-round-box",
  ".a-conduct-round"
);

AInitConductRound(
  ".b-conduct-round-box",
  ".b-conduct-round"
);



const ARememberBlock = document.querySelector(".remember-block");

if (ARememberBlock) {
  ARememberBlock.addEventListener("click", () => {
    ARememberBlock.classList.toggle("active");
  });
}




  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.auth-tolls-wrapper');
    if (!wrapper) return; 

    const tolls = wrapper.querySelectorAll('.auth-tolls');
    const buttons = wrapper.querySelectorAll('.auth-tabs button');

    if (!tolls.length || !buttons.length) return;

    function showBlock(id) {
      tolls.forEach(block => {
        block.style.display =
          block.dataset.id === id ? 'block' : 'none';
      });

      buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.id === id);
      });
    }

    showBlock('authorization');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (!id) return;

        showBlock(id);
      });
    });
  });




  if (document.querySelector('.confirmation-inputs-items')) {
    const AInputs = document.querySelectorAll(
      '.confirmation-input-item input'
    );

    if (AInputs.length) {
      AInputs.forEach((AInput, AIndex) => {
        AInput.addEventListener('input', (AEvent) => {
          let AValue = AEvent.target.value;

          AValue = AValue.replace(/\D/g, '').slice(0, 1);
          AEvent.target.value = AValue;

          if (AValue && AIndex < AInputs.length - 1) {
            AInputs[AIndex + 1].focus();
          }
        });

        AInput.addEventListener('keydown', (AEvent) => {
          if (
            AEvent.key === 'Backspace' &&
            !AInput.value &&
            AIndex > 0
          ) {
            AInputs[AIndex - 1].focus();
          }
        });

        AInput.addEventListener('paste', (AEvent) => {
          AEvent.preventDefault();

          const APaste = AEvent.clipboardData
            .getData('text')
            .replace(/\D/g, '')
            .slice(0, AInputs.length);

          APaste.split('').forEach((ADigit, APos) => {
            if (AInputs[APos]) {
              AInputs[APos].value = ADigit;
            }
          });

          if (AInputs[APaste.length - 1]) {
            AInputs[APaste.length - 1].focus();
          }
        });
      });
    }
  }
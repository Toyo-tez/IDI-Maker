

 div="button";

        const dialogData = {
            1: {
                text: "Hola ", 
                options: [
                    { text: "", nextDialog: 2 },
                    { text: "", nextDialog: null }
                ]
            },
            2: {
                text: "tuki",
                options: [
                    { text: "tuki", nextDialog: 3 },
                    { text: "tuki .", nextDialog: 4 }
                ]
            },
            3: {
                text: "mimimi",
                options: [
                    { text: "mimim", nextDialog: 1 }
                ]
            },
            4: {
                text: "utgouene",
                options: [
                    { text: "Sí, por supuesto", nextDialog: 1 },
                    { text: "No, gracias", nextDialog: 1 }
                ]
            }
        };

        function updateDialog() {
            const dialogText = document.getElementById("dialog-text");
            const optionsDiv = document.getElementById("options");

            const dialog = dialogData[currentDialog];
            dialogText.textContent = dialog.text;

            optionsDiv.innerHTML = "";

            if (dialog.options) {
                dialog.options.forEach((option, index) => {
                    const button = document.createElement("button");
                    button.textContent = option.text;
                    button.onclick = function () {
                        selectOption(index);
                    };
                    optionsDiv.appendChild(button);
                });
            }
        }

        function selectOption(optionIndex) {
            const dialog = dialogData[currentDialog];
            if (dialog.options && dialog.options[optionIndex]) {
                currentDialog = dialog.options[optionIndex].nextDialog;
                updateDialog();
            }
        }

        // Iniciar el diálogo
        updateDialog();

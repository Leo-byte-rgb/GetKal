const form = document.querySelector('#form');



form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    console.log('submitted');

    const age = getInputNumberValue('age');
    const weight = getInputNumberValue('weight');
    const height = getInputNumberValue('height');
    const gender = getSelectedValue('gender');
    const activityLevel = getSelectedValue('activity_level');

    const tmb = (
        gender === 'female'
        ? (655 + (9,6* weight) + (1,8 * height) - (4,7*age))
        : (66 + (13,8* weight) + (5 * height) - (6,8 *age))

    )
        const maintenance = Math.round((tmb * Number(activityLevel)))
        const loseWeight = maintenance - 500;
        const gainWeight = maintenance + 500;


        const layout = `  <h2>Aqui está o resultado:</h2>
        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
            </li>
          </ul>
        </div>
      `;

      const result = document.querySelector('#result');
      result.innerHTML = layout;
}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}
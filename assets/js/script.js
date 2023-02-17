// tab constants
const infoTab = document.querySelector('#info-tab')
const mainTab = document.querySelector('#main-tab')
const infoLink = document.querySelector('#info-link')
const mainLink = document.querySelector('#main-link')
const allTabs = document.querySelectorAll('.tab'); 
const navbar = document.querySelector('nav')
const navLinks = document.querySelectorAll('.nav-link');

// main tab on start
allTabs.forEach((item) => {item.setAttribute('class', 'hide');})
mainTab.removeAttribute('class', 'hide');
document.querySelector('#main-link').classList.add('active-tab')

// tab switching functionality
const changeTabFunc = (tabToOpen) => {
  allTabs.forEach(item => {
    item.setAttribute('class', 'hide');
  })
  tabToOpen.classList.remove('hide')
}

navbar.addEventListener('click', (event) => {
  let tab = event.target
  let tabName = tab.getAttribute('data-tab');
  let tabToOpen = document.getElementById(tabName); 
  changeTabFunc(tabToOpen); 

  console.log(navLinks)
  navLinks.forEach(link => {
    console.log(link)
    link.classList.remove('active-tab'); 
  })
  tab.classList.add('active-tab')
})

// MAIN-TAB
const provisioning = document.querySelector('#provisioning-table')
const regulating = document.querySelector('#regulating-table')
const cultural = document.querySelector('#cultural-table')
const supporting = document.querySelector('#supporting-table')
const allTables = document.querySelectorAll('table')

// inital row headings (services)
provisioningArray = ['Provision of fresh water', 'Provision of food',
'Provision of fibre', 'Provision of fuel', 'Provision of genetic resources',
'Provision of natural medicines and pharmaceuticals', 'Provision of ornamental resources',
'Clay, mineral, aggregate harvesting', 'Waste disposal', 
'Energy harvesting from natural air and water flows']

regulatingArray = ['Air quality regulation', 'Local climate regulation',
 'Global climate regulation', 'Water regulation', 'Flood hazard regulation',
'Storm hazard regulation', 'Pest regulation', 'Regulation of human diseases',
 'Regulation of diseases affecting livestock', 'Erosion regulation', 'Water purification',
'Pollination', 'Salinity regulation', 'Fire regulation', 'Noise and visual buffering']

culturalArray = ['Cultural heritage', 'Recreation and tourism', 'Aesthetic value',
'Spritual and religious value', 'Insipiration value', 'Social relations', 
'Education and research'
]

supportingArray = ['soil formation', 'Primary production', 'Nutrient cycling',
'Water recycling', 'provision of habitat']

// table setup - headers
for (i = 0; i < allTables.length; i++) {
  allTables[i].innerHTML = `<thead>
                <tr>
                    <th>Service</th>
                    <th>--</th>
                    <th>-</th>
                    <th>0</th>
                    <th>+</th>
                    <th>++</th>
                </tr>
            </thead>
            <tbody></tbody>`
        }

// function to add rows
const proBody = provisioning.querySelector('tbody'); 
const regBody = regulating.querySelector('tbody'); 
const culBody = cultural.querySelector('tbody'); 
const supBody = supporting.querySelector('tbody'); 
const rowSetup = (title, table) => {
  let className = title.replace(/\W/g, '-').toLowerCase(); 
  return `<tr>
<th>
  <textarea>${title}</textarea>
</th>
<td class="minus-minus">
  <input type='radio' value=-1 data-name='${className}' data-table='${table}'>
</td>
<td class="minus">
  <input type='radio' value=-0.5 data-name='${className}' data-table='${table}'>
</td>
<td class="zero">
  <input type='radio' value=0 data-name='${className}' data-table='${table}'>
</td>
<td class="plus">
  <input type='radio' value=0.5 data-name='${className}' data-table='${table}'>
</td>
<td class="plus-plus">
  <input type='radio' value=1 data-name='${className}' data-table='${table}'> 
  <div>
    <button class="new-row">+</button>
    <button class="delete-row">-</button>
  </div>
</td>
</tr>
`}

// add initial rows
provisioningArray.forEach((item) => {proBody.innerHTML += rowSetup(item, 'provisioning');})
regulatingArray.forEach((item) => {regBody.innerHTML += rowSetup(item, 'regulating')})
culturalArray.forEach((item) => {culBody.innerHTML += rowSetup(item, 'cultural')})
supportingArray.forEach((item) => {supBody.innerHTML += rowSetup(item, 'supporting')})

// button functionality
mainTab.addEventListener('click', (event) => {
    let row = event.target.parentNode.parentNode.parentNode;
    let table = row.parentNode.parentNode.getAttribute('data-table'); 
    console.log(table); 
    if (event.target.getAttribute('class') === 'new-row') {
      event.preventDefault(); 
      let newRowContent = document.createElement('tr');
      newRowContent.innerHTML = `<th>
      <textarea></textarea>
    </th>
    <td class="minus-minus">
      <input type='radio' value=-1 data-name='' data-table='${table}'>
    </td>
    <td class="minus">
      <input type='radio' value=-0.5 data-name='' data-table='${table}'>
    </td>
    <td class="zero">
      <input type='radio' value=0 data-name='' data-table='${table}'>
    </td>
    <td class="plus">
      <input type='radio' value=0.5 data-name='' data-table='${table}'>
    </td>
    <td class="plus-plus">
      <input type='radio' value=1 data-name='' data-table='${table}'> 
      <div>
        <button class="new-row">+</button>
        <button class="delete-row">-</button>
      </div>
    </td>`

    // set textarea service to name attribute
    let newRow  = row.parentNode.insertBefore(newRowContent, row);
    newRow.addEventListener('keyup', () => {
        let text = newRow.querySelector('textarea')
        let newName = text.value.replace(/\W/g, '-').toLowerCase();
        let radioArray = newRow.querySelectorAll('input'); 
        radioArray.forEach(item => {
          item.setAttribute('data-name', newName);
        }) 
    })
    console.log(newRow.querySelector('textarea').value); 
  } else if (event.target.getAttribute('class') === 'delete-row') {
    row.remove(); 
} else {
  return; 
}
})

// on submit (data processing)
let submitBtn = $('#submit-button');

submitBtn.on('click', (event) => {
  event.preventDefault(); 
  let checkedBoxes = $('input:checked', '#rawes-data');
  checkedBoxes = checkedBoxes.toArray();
  console.log(checkedBoxes);
  checkedBoxes.forEach(box => {
    console.log(box.getAttribute('data-name'))
    console.log(box.getAttribute('data-table'))
    console.log(box['value'])
  })
})


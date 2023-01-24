const main = document.querySelector('#main-tab')
const provisioning = document.querySelector('#provisioning-table')
const regulating = document.querySelector('#regulating-table')
const cultural = document.querySelector('#cultural-table')
const supporting = document.querySelector('#supporting-table')
const allTables = document.querySelectorAll('table')

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
                    <th>?</th>
                </tr>
            </thead>
            <tbody></tbody>`
        }

const proBody = provisioning.querySelector('tbody'); 
const regBody = regulating.querySelector('tbody'); 
const culBody = cultural.querySelector('tbody'); 
const supBody = supporting.querySelector('tbody'); 
const rowSetup = (title) => {return `<tr>
<th>${title}</th>
<td class="minus-minus"></td>
<td class="minus"></td>
<td class="zero"></td>
<td class="plus"></td>
<td class="plus-plus"></td>
<td class="unknown"></td>
</tr>`}

provisioningArray.forEach((item) => {proBody.innerHTML += rowSetup(item)})
regulatingArray.forEach((item) => {regBody.innerHTML += rowSetup(item)})
culturalArray.forEach((item) => {culBody.innerHTML += rowSetup(item)})
supportingArray.forEach((item) => {supBody.innerHTML += rowSetup(item)})





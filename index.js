// Select alle elementen die nodig zijn
const lightbuld = document.querySelector( "#lightbulb" )
const onBtn = document.querySelector( "#turn-on" )
const offBtn = document.querySelector( "#turn-off" )
const body = document.querySelector( "body" )
const statement = document.querySelector( "#statement" )
const statementStatus = document.querySelector( "#status" )

// Bepaal de styles van de on en off state
const onStyles = {
    light: 'images/light-on.png',
    bodyBg: '#111111',
    text: 'on'
}

const offStyles = {
    light: 'images/light-off.png',
    bodyBg: '#F6F6F6',
    text: 'off'
}

onBtn.addEventListener( 'click', () => {
    // Verander de kleur van het achtergrond en de text in tegenstelling
    body.style.background = onStyles.bodyBg
    statement.style.color = offStyles.bodyBg

    // Verander de text van "off" naar "on" en omgekeerd
    statementStatus.innerText = onStyles.text

    // Verander het plaatje
    lightbuld.setAttribute( 'src', onStyles.light )
} )

// Dit is hetzelfde als de EventListener hierboven alleen omgekeerd
offBtn.addEventListener( 'click', () => {
    body.style.background = offStyles.bodyBg
    statement.style.color = onStyles.bodyBg
    statementStatus.innerText = offStyles.text
    lightbuld.setAttribute( 'src', offStyles.light )
} )
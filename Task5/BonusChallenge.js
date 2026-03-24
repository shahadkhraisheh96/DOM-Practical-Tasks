const flowers = [
    { name: 'Lilies', desc: 'Elegant bulbs famous in culture.' },
    { name: 'Roses', desc: 'Classic blooms with a sweet scent.' },
    { name: 'Tulips', desc: 'Vibrant spring flowers from bulbs.',}
];
const grid = document.createElement('div');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
grid.style.gap = '20px';
grid.style.padding = '20px';


flowers.forEach(flower => {
    const card = document.createElement('div');
    card.style.border = 'solid 1pt #cea3a3';
    card.style.borderRadius = '12px';
    card.style.padding = '30px';
    card.style.backgroundColor = '#e0e0e0';
    card.style.boxShadow = '4px 6px rgba(187, 148, 148, 0.1)';

    card.innerHTML = `
        <h2 style="color: #f499f1;">${flower.name}</h2>
        <p style=" color: #0c2545;">${flower.desc}</p>
        <button class="view-btn" style="color: #f499f1; ">Learn More</button>
    `;

    grid.appendChild(card);
});


document.body.appendChild(grid);
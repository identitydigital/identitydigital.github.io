export class HoverInfoSystem {
    constructor() {
        this.infoBox = document.createElement('div');
        this.infoBox.className = 'hover-info-box';
        document.body.appendChild(this.infoBox);
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            const target = e.target.closest('[data-hover-info]');
            
            if (target) {
                const hoverInfo = target.dataset.hoverInfo;
                const infoType = target.dataset.hoverInfoType;
                this.showInfo(hoverInfo, infoType, e.clientX, e.clientY);
            } else {
                this.hideInfo();
            }
        });
    
        document.addEventListener('mouseleave', () => this.hideInfo());
    }

    showInfo(content, type, x, y) {
        this.infoBox.innerHTML = this.formatContent(content, type);
        this.infoBox.dataset.infoType = type;
        
        const boxRect = this.infoBox.getBoundingClientRect();
        
        let left = x;
        let top = y;
        
        if (left + boxRect.width > window.innerWidth) {
            left = window.innerWidth - boxRect.width;
        }
        
        if (top + boxRect.height > window.innerHeight) {
            top = window.innerHeight - boxRect.height;
        }
        
        this.infoBox.style.left = `${left+8}px`;
        this.infoBox.style.top = `${top+8}px`;
        this.infoBox.classList.add('visible');
    }

    hideInfo() {
        this.infoBox.classList.remove('visible');
    }

    formatContent(content, type) {
        switch(type) {
            case 'trait':
                return content; 
            case 'status':
                const statusData = JSON.parse(content);
                return `
                    <strong>${statusData.name}</strong><br>
                    Duration: ${statusData.duration} rounds<br>
                    ${statusData.description}
                `;
            case 'upgrade':
                console.log(content)
                const upgradeData = JSON.parse(content);
                return `
                    <strong>${upgradeData.name}</strong><br>
                    Cost: ${upgradeData.cost} coins<br>
                    ${upgradeData.description}<br>
                    Can you buy this multiple times? ${upgradeData.repeatable ? "yes" : "no"}<br>
                    <em>Click to purchase</em>
                `;
            default:
                return content;
        }
    }
}
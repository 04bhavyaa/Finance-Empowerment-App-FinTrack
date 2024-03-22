document.addEventListener('DOMContentLoaded', () => {
    const blendBtn1 = document.getElementById('blend-btn-1');
    const blendBtn2 = document.getElementById('blend-btn-2');
    const result = document.getElementById('result');
    const blendedResult = document.getElementById('blended-result');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    blendBtn1.addEventListener('click', () => {
        result.style.display = 'flex';
        blendImages(getImage('person1.jpg'), getImage('blend-person1.jpg'));
    });

    blendBtn2.addEventListener('click', () => {
        result.style.display = 'flex';
        blendImages(getImage('person2.jpg'), getImage('blend-person2.jpg'));
    });

    function getImage(src) {
        const img = new Image();
        img.src = src;
        return img;
    }

    function blendImages(img1, img2) {
        canvas.width = img1.width;
        canvas.height = img1.height;

        ctx.drawImage(img1, 0, 0);

        const imgData1 = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const imgData2 = ctx.getImageData(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < imgData1.data.length; i += 4) {
            imgData1.data[i] = (imgData1.data[i] + imgData2.data[i]) / 2;
            imgData1.data[i + 1] = (imgData1.data[i + 1] + imgData2.data[i + 1]) / 2;
            imgData1.data[i + 2] = (imgData1.data[i + 2] + imgData2.data[i + 2]) / 2;
        }

        ctx.putImageData(imgData1, 0, 0);
        blendedResult.src = canvas.toDataURL();
    }
});
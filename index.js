const fileInput = document.getElementById('file');
const submitBtn = document.getElementById('submitBtn'); 
const inputElement = document.getElementById("input");
const Paragraph = document.getElementById("Paragraph")
const Bits = document.getElementById("Bits")
const Name = document.getElementById("Name")

// inputElement.addEventListener("change", handlefiles, true)
function handlefiles() {
    const files = this.files
    console.log(files)
}   

submitBtn.addEventListener("click", function() {
    const file = fileInput.files[0];
    
    if (file){
        const fileSizeBytes = file.size
        const fileSizeBites = file.size * 8
        const name = file.name

        let humanReadableSize;

        if (fileSizeBytes < 1024) {
            humanReadableSize = `${fileSizeBytes} Bytes`;
        } else if (fileSizeBytes < 1024 * 1024) {
            humanReadableSize = `${(fileSizeBytes / 1024)} Kilobytes (KB)`;
        } else if (fileSizeBytes < 1024 * 1024 * 1024) {
            humanReadableSize = `${(fileSizeBytes / (1024 * 1024))} Megabytes (MB)`;
        } else {
            humanReadableSize = `${(fileSizeBytes / (1024 * 1024 * 1024))} Gigabytes (GB)`;
        }
        Paragraph.innerHTML = `File size: ${humanReadableSize}`;
        Bits.innerHTML = `File size: ${fileSizeBites} bits`;
        Name.innerHTML = `File name: ${name}`;
        console.log(`File size: ${fileSizeBytes} bytes`);
    }else{
        Paragraph.innerHTML = `No File Selected`
        console.log('No file selected.');
    }
    
});

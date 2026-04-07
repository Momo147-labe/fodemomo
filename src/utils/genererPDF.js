import html2canvas from 'html2canvas-pro'
import jsPDF from 'jspdf'

const generatePdf = async (cvPreviewRef, name) => {
    const element = cvPreviewRef.current
    if (element) {
        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: null
            })
            const imgData = canvas.toDataURL('image/png', 1.0)

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: 'mm',
                format: "A4",
                compress: true
            })

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
            pdf.save(`CV_${name.replace(/\s+/g, '_')}.pdf`);

        } catch (error) {
            console.error('Erreur lors de la génération du PDF :', error);
        }
    }
}

export default generatePdf;
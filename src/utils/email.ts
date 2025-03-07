import emailjs from "@emailjs/browser";

export const sendEmail = async (formData: Record<string, string>) => {
    try {
        await emailjs.send(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            formData,
            "YOUR_PUBLIC_KEY"
        );
        alert("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

import emailjs from "@emailjs/browser";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export const sendEmail = async (formData: Record<string, string>): Promise<{ ok: boolean }> => {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
        return { ok: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { ok: false };
    }
};

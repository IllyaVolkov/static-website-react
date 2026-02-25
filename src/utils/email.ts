import emailjs from "@emailjs/browser";

const SERVICE_ID = "default_service";
const TEMPLATE_ID = "template_xly5e46";
const PUBLIC_KEY = "5bkBOKIjHn7XWGkDX";

export const sendEmail = async (formData: Record<string, string>): Promise<{ ok: boolean }> => {
    try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
        return { ok: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { ok: false };
    }
};

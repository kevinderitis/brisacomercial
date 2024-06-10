import { getLeadByChatId, updateLeadStatusByChatId } from "../dao/leadDAO.js";

export const validateLeadStatus = async chatId => {
    try {
        let lead = await getLeadByChatId(chatId);
        if (!lead) {
            return true;
        }
        return lead.status === 'active';
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const validatePriceResponse = async (text, chatId) => {
    const pattern = /✅ \d+ mensajes x \$\d+(,\d{3})* - \(\$\d+(,\d{3})* por mensaje\)/g;
    try {
        if (text.match(pattern)) {
            await updateLeadStatusByChatId(chatId, 'pending')
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

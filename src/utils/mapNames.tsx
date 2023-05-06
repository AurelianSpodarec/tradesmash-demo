import mappingTrade from "@/config/mappings/mappingTrade";

const mapNames = {
    trades({ include = [], exclude = [] }:any) {
        let result = mappingTrade;

        if (include.length === 1) {
            result = mappingTrade.find(({ id }) => id === include[0]);
        } else if (include.length > 1) {
            result = mappingTrade.filter(({ id }) => include.includes(id));
        }
    
        if (exclude.length === 1) {
            result = result.filter(({ id }) => id !== exclude[0]);
        } else if (exclude.length > 1) {
            result = result.filter(({ id }) => !exclude.includes(id));
        }
    
        return result;
    }
}

export default mapNames;
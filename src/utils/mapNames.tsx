import mappingTrade from "@/config/mappings/mappingTrade";

const mapNames = {
    trades({ include = [], exclude = [] }:any) {
        let result:any = mappingTrade;

        if (include.length === 1) {
            result = mappingTrade.find(({ id }) => id === include[0]);
        } else if (include.length > 1) {
            result = mappingTrade.filter(({ id }) => include.includes(id));
        }
    
        if (exclude.length === 1) {
            result = result.filter(({ id }:any) => id !== exclude[0]);
        } else if (exclude.length > 1) {
            result = result.filter(({ id }:any) => !exclude.includes(id));
        }
    
        return result;
    }
}

export default mapNames;

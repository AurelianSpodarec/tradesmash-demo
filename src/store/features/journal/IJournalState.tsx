import INote from "@/interface/INote";

export interface IJournalState {
    activeNote: INote | null;
    activeNoteIndex: number | null;
    notes: INote[];
    filterByDate: string;
}
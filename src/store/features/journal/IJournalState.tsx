import INote from "@/interface/INote";

export interface IJournalState {
    activeNote: INote;
    activeNoteIndex: number;
    notes: INote[];
    filterByDate: string;
}
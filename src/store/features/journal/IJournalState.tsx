import INote from "@/interface/INote";

export interface JournalState {
    activeNote: INote;
    activeNoteIndex: number;
    notes: INote[];
    filterByDate: string;
}
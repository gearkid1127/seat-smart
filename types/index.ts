export type LayoutType = "grid" | "groups";

export type Student = {
    id: string;
    name: string;
    gender?: "boy" | "girl" | "other";
    worksWellWith: string[];
    cannotSitNear: string[];
    frontPreference?: boolean;
}

export type Seat = {
    id: string;
    row: number;
    col: number;
    enabled: boolean;
    groupId: string | null;
}

export type SeatAssignment = {
    seatID: string;
    studentID: string | null;
    locked: boolean;
}

export type SeatingChart = {
    id: string;
    classId: string;
    name: string;
    createdAt: string;
    finalized: boolean;
    assignments: SeatAssignment[];
}

export type Classroom = {
    id: string;
    name: string;
    layoutType: LayoutType;
    rows: number;
    cols: number;
    frontDirection: "top" | "bottom" | "left" | "right";
    students: Student[];
    seats: Seat[];
    charts: SeatingChart[];
}
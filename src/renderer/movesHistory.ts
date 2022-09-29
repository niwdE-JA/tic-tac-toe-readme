import type { Moves } from "../../types/index.ts";

const _1 = () => "\n\n**Moves history, this game**" + "\n\n";
const _2 = () => "|No.|Move|Who|" + "\n";
const _3 = () => "|-|-|-|" + "\n";
const __4 = (no: number, move: Moves, name: string, url: string) => `|${no}|${move}|[@${name}](${url})|` + "\n";

type UserMove = {
    name: string;
    url: string;
    moveTo: Moves;
}

export const renderMovesHistory = (moveHistory: UserMove[]) => {
	let rendered = _1() + _2() + _3();
	moveHistory.map(({ moveTo, name, url }, index) => (rendered += __4(index + 1, moveTo, name, url)));

	return rendered;
};

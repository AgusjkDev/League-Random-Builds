import type { NextApiRequest, NextApiResponse } from "next";

import { champs, gamemodes, roles, allItems, summonerSpells } from "../../data";
import { getRandomElement, getRandomUniqueElements, getRandomItems } from "../../utils";

export default async function handler(req: NextApiRequest, res: NextApiResponse<GetRandomBuild>) {
    if (req.method !== "POST") return res.end();

    let { champ, gamemode } = <BuildConfig>req.body.buildConfig;

    champ = champ ? champ : getRandomElement(champs);
    gamemode = gamemode ? gamemode : getRandomElement(Object.values(gamemodes));

    const role = gamemode.id === "aram" ? roles.mid : getRandomElement(Object.values(roles));
    const items = getRandomItems(allItems, champ);

    const spells = getRandomUniqueElements(
        [
            ...summonerSpells.global,
            ...(gamemode.id === "sr" ? [summonerSpells.teleport] : summonerSpells.aram),
        ],
        2
    );
    spells[0] = role.id !== "jng" ? spells[0] : summonerSpells.smite;

    return res.status(200).json({ randomBuild: { champ, gamemode, role, items, spells } });
}

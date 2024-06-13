

// "id" : 1,
// "name" : "Kanto",
// "generation" : 1,
// "description" : "Inspirée de la région japonaise de Kanto"

import Link from "next/link";

//Afficher une liste avec
// Kanto (Gen 1)
// Johto (Gen 2)

const RegionListItem = ({ id, name, generation }) => {

    return (
        <li>
            <Link href={'/region/' + id}>{name} (Gen {generation})</Link>
            {/* autre syntaxe → <Link href={`/region/${id}`}>{name} (Gen {generation})</Link>*/}
        </li>
    )
};

const RegionList = ({regions}) => {

    return (
        <ul>
            {/* La fonction MAP convertit les éléments de la liste vers un nouveau résultat. Elle transforme la liste*/}
            {regions.map(
               region => <RegionListItem key={region.id} {...region} />
            )}

        </ul>
    );
};

export default RegionList;
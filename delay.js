// // Déclaration des fonctions primaires plus(+), moins(-), multiplier(*), diviser(/).
const plus = (...args) => {
    let total = 0;
    for(const arg of args){
        total += arg; 
    };
    return total;
};
const moins = (a, b) => a - b;
const multiplierPar = (...args) => {
    let total = 1;
    for(const arg of args){
        total = total * arg;
    };
    return total;
};
const diviserPar = (a, b) => {
        if(b === 0){
            throw Error ("Il est imposible de faire une division par zéro");
        }
        return a / b;
};

// La fonction calculer utilise un switch pour choisir l'opération à faire selon les des fonctions primaires.
const calculer = (operation) => {
    switch(operation){
        case "plus":
            return plus;
        case "moins":
            return moins;
        case "multiplierPar":
            return multiplierPar;
        case "diviserPar":
            return diviserPar;
        break;
        default:
            return (a, b) => "Impossible de faire cette opération";
    };
};

// Calculatrice est la fonction constructor qui appelle la fonction calculer pour simplifier les calculs.
const Calculatrice = (operation, ...args) => {
    let dic = new Map();
    dic.set("plus", " + ");
    dic.set("moins", " - ");
    dic.set("multiplierPar", " * ");
    dic.set("diviserPar", " / ");

    try{
        console.log("Résultat de " + args.join(dic.get(operation)) + " = ",
        calculer(operation)(...args));
    }catch(err){
        console.error(err.message);
    };
};

Calculatrice("diviserPar", 10, 2, 5, 5);
Calculatrice("multiplierPar", 10, 2, 5, 5);
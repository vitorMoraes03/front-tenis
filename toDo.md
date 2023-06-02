Refatorar o projeto, duas metas principais:

Melhorar a filtragem... 
Simplificar a home... done

A filtragem ta mto mal feita.
Temos shoes, setShoes e defaultShoes como estados compartilhados por todos os filtros.

Em cada componente temos a filtragens.
Mas todos os componentes deveriam ter acesso a tudo que esta sendo filtrado.
Se não, como saberei se tem algo checked ou não em outro input?

poderiamos transformar shoes num objeto mais complexo?

Algo como: {
    shoes: []
    genderFilteredIds: []
    categoryFilteredIds: []
    genderFilteredIds: []
    sizeFilteredIds: []
}

toda vez que shoes mudar... alteramos o resultado final...
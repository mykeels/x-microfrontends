echo -E "
    declare const schema: $(cat ./package.json); 
    export default schema;
" > ./package.json.d.ts
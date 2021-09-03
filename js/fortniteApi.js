const FORTNITE_API_BASE="https://fortnite-api.com/v2/"
const FORTNITE_API_CDN_BASE="https://fortnite-api.com/images/cosmetics/br/"
const endpoints={CosmeticsById:(ids)=>{return FORTNITE_API_BASE+`cosmetics/br/search/ids?${buildIdQueryString(ids)}`},CosmeticsByName:(name)=>FORTNITE_API_BASE+`cosmetics/br/search/all?name=${name}&matchMethod=contains`}
function getCosmeticsById(ids){return new Promise((resolve,reject)=>{if(typeof ids==='string'||ids instanceof String)
ids=[ids];$.ajax({url:endpoints.CosmeticsById(ids),type:"GET",success:(res)=>{resolve(res.data);},error:()=>{resolve([]);}})})}
function getCosmeticsByName(name){$.ajax({url:endpoints.CosmeticsByName(name),type:"GET",success:(res)=>{return res.data.data;}})}
function buildIdQueryString(array){var final=""
for(var i=0;i<array.length;i++){final+=`id=${array[i]}`
if((i+1)!=array.length)
final+="&"}
return final}
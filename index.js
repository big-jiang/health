let Koa = require('koa');
let Router = require('koa-router');
let bodyparser = require('koa-bodyparser');
let axios = require('axios');
let router = new Router()
let app = new Koa();
app.use(bodyparser());
console.log('101')
router.post('/getHealth',async(ctx)=>{ 
    let {name,idcard} = ctx.request.body;
    console.log(`name:${name}-${idcard}`);
    if(name && idcard){
       //let url = 'http://172.24.242.182:8080/getHealth?idcard='+idcard;
       //let data = {idcard:idcard};
       //await axios.post(url,data).then(res=>{
	//ctx.body = {code:200,data:res.data}}).catch(err=>{
	//ctx.body = {code:401,data:err}});
	let url = 'http://172.24.242.182:8080';
	let data = { idcard:idcard};
	await axios.get(url,data).then(res=>{console.log(res)}).catch(err=>console.log(err));
    }
});

app.use(router.routes());
app.listen(8080);

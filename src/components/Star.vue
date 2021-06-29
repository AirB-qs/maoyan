<template>
<div>
    <tr class="iconfont-star">
        <td>&#xe6b9;</td><td>&#xe6b9;</td><td>&#xe6b9;</td><td>&#xe6b9;</td><td>&#xe6b9;</td><td>{{sc%1==0?sc+'.0':sc}}</td>
        
    </tr>
    <p>({{snum(isnum)}}万人参评)</p>
</div>
    
    
    
</template>

<script>


export default ({
    props:{
        sc:{
            type:Number
        },
        isnum:{
            type:Number
        }
    },
    methods:{
        //处理参评人数的有效数字
        snum(value){
            let n=Number(value);
            if(n/10000<1){
                return value
            }else{
                let s=Math.floor(n/10000);
                let s1=n%10000;
                let s3=Math.floor(s1/1000)
                let s2=s1%1000;
                if(s2>=900){
                    return (s+1)+'.'+0
                }else if(s2>=500){
                    return s+'.'+(s3+1)
                }else{
                    return s+'.'+s3
                }
            }
        }
    }
})
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/iconfont.styl'
div 
    display inline
    height .1rem
    tr
        color #eee
        td:nth-last-child(1)
            color orange
    p   
        margin-top -0.05rem
        color #eee
        font-size .08rem        
  
</style>
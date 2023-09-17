// 询问说书人本局玩家人数
const ppl = prompt('请输入玩家人数');

// 阵营人数配置
const environment={
    5:[3, 0, 1, 1],
    6:[3, 1, 1, 1],
    7:[5, 0, 1, 1],
    8:[5, 1, 1, 1],
    9:[5, 2, 1, 1],
    10:[7, 0, 2, 1],
    11:[7, 1, 2, 1],
    12:[7, 2, 2, 1],
    13:[9, 0, 3, 1],
    14:[9, 1, 3, 1],
    15:[9, 2, 3, 1],
};

// 角色表
let cunmin = [
    {
        name: '洗衣妇',
        identity: '镇民f4',
        zhenying: '好人',
        color: 'blue',
        ability: '在游戏开始时，你会得知道两名玩家其中一位的具体镇民身份，但不知道具体哪名玩家持有此身份牌。'
    },
    {
        name: '图书管理员',
        identity: '镇民f4',
        zhenying: '好人',
        color: 'blue',
        ability: '在游戏开始时，你会得知道两名玩家其中一位的具体外来者身份，或者被告知本局游戏没有外来者。'
    },
    {
        name: '调查员',
        identity: '镇民f4',
        zhenying: '好人',
        color: 'blue',
        ability: '在游戏开始时，你会得知道两名玩家其中一位的具体爪牙身份'
    },
    {
        name: '厨师',
        identity: '镇民f4',
        zhenying: '好人',
        color: 'blue',
        ability: '在游戏开始时，你会知道有多少对邪恶阵营玩家为邻座'
    },
    {
        name: '共情者',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '每个夜晚，你会知道你左右两边的玩家中有几个邪恶角色(0, 1, 2)'
    },
    {
        name: '占卜师',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '每个夜晚，你可以主动向说书人询问任意两名玩家的身份，并得知他们中是否存在恶魔/柱子'
    },
    {
        name: '送葬者',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '每个夜晚，你会得知白天被处决的玩家的具体身份'
    },
    {
        name: '僧侣',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '每个夜晚，选择一名玩家（除了自己），恶魔的杀人能力在今晚不会对那名玩家生效'
    },
    {
        name: '守鸦人',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '你如果在夜晚死去，则你会被说书人唤醒，你可以得知任意一名玩家的真实身份'
    },
    {
        name: '圣女/处女',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '(限一次) 当你第一次被提名时，如果提名你的玩家为村民，那么该名玩家会被立即处决，并进入黑夜'
    },
    {
        name: '猎人/枪手/杀手',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '可在白天对存活的任意一名玩家开枪；如果该名玩家为恶魔，则他直接被处决；否则“无事发生”'
    },
    {
        name: '士兵',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '恶魔对你的击杀视为无效'
    },
    {
        name: '市长/镇长',
        identity: '镇民',
        zhenying: '好人',
        color: 'blue',
        ability: '如果在白天仅有三人在场且无人被处决时，好人获胜'
    }
];
let wailai =[
    {
        name: '管家/家仆',
        identity: '外来者',
        zhenying: '好人',
        color: 'blue',
        ability: '每个夜晚，选择一名玩家（除了自己）；明天你的投票结果会和他一致'
    },
    {
        name: '酒鬼',
        identity: '外来者',
        zhenying: '好人',
        color: 'blue',
        ability: '重新抽身份'
    },
    {
        name: '隐士/陌客',
        identity: '外来者',
        zhenying: '好人',
        color: 'blue',
        ability: '你可能会被判定为一名邪恶玩家（爪牙或恶魔）即使你已经死亡'
    },
    {
        name: '圣徒',
        identity: '外来者',
        zhenying: '好人',
        color: 'blue',
        ability: '如果你死于处决，游戏结束，好人阵营失败'
    }
];
let zhaoya =[
    {
        name: '投毒者',
        identity: '爪牙',
        zhenying: '坏人',
        color: 'red',
        ability: '每个夜晚，你可以选择一个人下毒，中毒效果持续到下一个黄昏'
    },
    {
        name: '间谍',
        identity: '爪牙',
        zhenying: '坏人',
        color: 'red',
        ability: '你可能会被其他玩家视为一名善良角色，并且在天亮之前你能够查看所有玩家的身份'
    },
    {
        name: '猩红女郎/荡妇',
        identity: '爪牙',
        zhenying: '坏人',
        color: 'red',
        ability: '小恶魔死亡时，若场上存货玩家大于等于4人，则你成为新的小恶魔'
    },
    {
        name: '男爵',
        identity: '爪牙',
        zhenying: '坏人',
        color: 'red',
        ability: '好人阵营新增两名外来者'
    }
];
let emo =[
    {
        name: '小恶魔',
        identity: '恶魔',
        zhenying: '坏人',
        color: 'red',
        ability: '每晚可以击杀一名玩家（首夜不能刀人）。如果你自刀，会有一个存活的爪牙代替你成为新的小恶魔。'
    }
];
let role = [cunmin, wailai, zhaoya, emo];
const num_role = role.length; // === max
const min = 0;

// 人数参数
const num_cunmin =environment[ppl][0];
const num_wailai =environment[ppl][1];
const num_zhaoya =environment[ppl][2];
const num_emo =environment[ppl][3];

function get_random(max, min){
    return Math.floor(Math.random()*(max-min))+min
};

// 随机阵营 (祈福功能即将上线)
function get_group(role){
    let i = get_random(role.length,min);
    let group = role[i+min];
    // 保险：防止角色都被抽光了 infinite loop
    if(role.length===0){

        const next_btn = document.querySelector('#next');
        next_btn.innerHTML='角色抽光了'
        next_btn.className='NoMoreRoles'

    }

    while(group.length===0){
        let i = get_random(role.length,min); 
        let group = role[i+min];
    }
    return group
}
let group = get_group(role);

// 随机身份
function get_shenfen(group){
    let i = get_random(group.length,min);
    const shenfen =group[i+min];
    let remove = group.indexOf(shenfen);
    // 抽完身份就删掉这个数据
    if(remove>-1){group.splice(remove,1)}
    // 如果阵营角色被抽完就删掉这个阵营
    if(group.length===0){
        let remove = role.indexOf(group);
        if(remove>-1){role.splice(remove,1)}
    }
    return shenfen
}
let shenfen =get_shenfen(group);

// 打印页面
function fresh(random_shenfen, x1, x2, x3, x4){
    document.write(`
    <div class="role_box">
        <div class="game_info" style="margin-top: 10px; margin-bottom: -10px;"><strong>本局设置为：</strong>${x1}镇民 ${x2}外来者 ${x3}爪牙 ${x4}恶魔</div>
        <div class="info">
            <h3>你的角色是
                <p class="role_name" style="font-size: 40px; color: ${random_shenfen.color};">"${random_shenfen.name}"</p>
                <p class="role_id" style="font-size: 16px;">(${random_shenfen.zhenying}阵营，${random_shenfen.identity})</p>
            </h3>
        </div>
        <div class="info" id="ability_box">
            <h3 class="ability">技能介绍
                <p class="ability_detail">${random_shenfen.ability}</p>
            </h3>
        </div>
    </div>
    <div class="manipulation">
        <button class='hover' id="next">下一个</button>
        <button class='hover' id="end">结束分配</button>
    </div>`)
}

// 生成
fresh(shenfen, num_cunmin, num_wailai, num_zhaoya, num_emo);

// 点击下一个时再次生成(not working)
// 09.17 update: 完善eventlistner by querySelector

const next = document.querySelector("#next");

next.addEventListener('click', function(){
    // 随机一个新身份
    group = get_group(role);
    shenfen =get_shenfen(group);
    // 选取新身份信息
    role_name = document.querySelector('.role_name')
    role_id = document.querySelector('.role_id')
    role_abi = document.querySelector('.ability_detail')
    // 修改页面身份信息
    role_name.innerHTML = shenfen.name;
    role_id.innerHTML = `(${shenfen.zhenying}阵营，${shenfen.identity})`
    role_abi.innerHTML = shenfen.ability;
    role_name.style.color = shenfen.color;
})

// 待完善：根据游戏配置，选择每个阵营能出的角色；结束后弹出每位玩家身份信息
// 更多功能请留言
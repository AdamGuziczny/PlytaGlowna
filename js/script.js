function info(pkt, inform){

    var punkt = document.getElementById(pkt);
    var information = document.getElementById(inform);

    punkt.addEventListener('mouseenter', function(){
        information.classList.remove('hide');
        information.classList.add('show');
    })
    punkt.addEventListener('mouseleave',function(){
        information.classList.remove('show');
        information.classList.add('hide');
    })

}
info('port','portInfo');
info('cpu','cpuInfo');
info('ram','ramInfo');
info('pcie','pcieInfo');
info('m2','m2Info');
info('audio','audioInfo');
info('sata','sataInfo')

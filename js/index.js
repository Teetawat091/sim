const i = 0;
const br = document.createElement('br');
function add() {
  const tag =  document.createElement('a');
      tag.setAttribute('class', 'btn');
      tag.setAttribute('value','ssss');
      tag.setAttribute('id','add'+i);
      tag.innerHTML = i+1;
      $('.subleft').prepend(br);
      $('.subleft').prepend(tag);
      i++;
}
function post() {
  if($('#uptus').val()==''){

  }
  else{
    const avartar = document.createElement('img');
        avartar.setAttribute('class','avartar');
        avartar.setAttribute('src','https://img00.deviantart.net/e4a2/i/2016/096/f/7/avatar_icon_by_astrolink247-d9xxs6r.jpg');
    const status = document.createElement('div');
        status.setAttribute('class','status');
        status.innerHTML = '<small>ago</small><br/><a style="text-decoration: none;" href="#">name poster</a><br/><br />'+$('#uptus').val();
        $(status).prepend(avartar);
        $('.feed').prepend(status);
        $('.feed').prepend(br);
        $('#uptus').val('');
  }

}

function pic() {
  console.log($('#file-upload').val());
  //$('#uploadForm').submit(); 

}

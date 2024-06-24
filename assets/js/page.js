$('.tahun').append(new Date().getFullYear());

/* Tombol kembali */

$('.home').click(function() {
	halaman('home');
});

$('.btn-back').click(function() {
	halaman('home');
});

function waktu() {
	var namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

	var hariIni = new Date();

	$('.hari-tanggal').text(namaHari[hariIni.getDay()] + ' ' + hariIni.getDate() + ' ' + namaBulan[hariIni.getMonth()] + ' ' + hariIni.getFullYear() + ', ');

	var h = hariIni.getHours(),
	    m = hariIni.getMinutes(),
	    s = hariIni.getSeconds();

	h = h<10 ? '0'+h : h;
	m = m<10 ? '0'+m : m;
	s = s<10 ? '0'+s : s;
	$('.jam').text(h + ' : ' + m + ' : ' + s);
}

var inter = setInterval(waktu, 1000);


/*tes jaringan server */

var time_start, end_time, mode = 1;
var imageLink = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tokyo_Sky_Tree_2012.JPG';
// The size in bytes
var downloadSize = 8185374;
var downloadImgSrc = new Image();

$('.test-jaringan').click(function() {
	time_start = new Date().getTime();
	//downloadImgSrc.src = imageLink;
	var cacheImg = "?nn=" + time_start;
	downloadImgSrc.src = imageLink + cacheImg;
	$('.test-jaringan').html('Silakan Tunggu');
	$('.test-jaringan').prop( "disabled", true );
	downloadImgSrc.onload = function () {
		end_time = new Date().getTime();
		displaySpeed();
	};
});

function displaySpeed() {
    var timeDuration = (end_time - time_start) / 1000;
    var loadedBits = downloadSize * 8;
    /* Converts a number into string
    using toFixed(2) rounding to 2 */
    var bps = (loadedBits / timeDuration);
    var speedInKbps = (bps / 1024).toFixed(2);
	var speedInMbps = (bps / 1024 / 1024).toFixed(2);
	
    if(speedInKbps > 800)
    {
        cls = 'text-success';
        cls_txt = 'Good';
    }
    else if(speedInKbps > 400)
    {
        cls = 'text-warning';
        cls_txt = 'Moderate';
    }
    else
    {
        cls = 'text-danger';
        cls_txt = 'Bad';
    }

    if(mode == 1)
    {
        $('#network_status').html('<i class="fa fa-signal '+cls+'"></i> '+cls_txt);
        $('#network_speed').html(speedInMbps+" Mbps");
    }
    else if(mode == 2)
    {
        $.get(URL_SAVE_NETWORK_INFO+'/'+speedInKbps+'/'+cls_txt);
    }
	$('.test-jaringan').prop( "disabled", false );
	$('.test-jaringan').html('<i class="fas fa-cogs"></i> CEK LAGI');
}


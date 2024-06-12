var audio;
		        var savedTime;
		
		        window.onload = function() {
		            audio = document.getElementById('audioPlayer');
		            audio.volume = 0.5; // 设置音量为50%
		            audio.play();
		            audio.loop = true; // 设置音频为循环播放
		
		            // 尝试从localStorage获取音频的播放时间
		            savedTime = parseFloat(localStorage.getItem('audioTime'));
		            if (savedTime) {
		                audio.currentTime = savedTime;
		            }
		
		            // 当音频播放完毕时，清除localStorage中的时间
		            audio.addEventListener('ended', function() {
		                localStorage.removeItem('audioTime');
		            });
		
		            // 当音频暂停或播放时，保存当前播放时间到localStorage
		            audio.addEventListener('pause', function() {
		                localStorage.setItem('audioTime', audio.currentTime);
		            });
		            audio.addEventListener('timeupdate', function() {
		                localStorage.setItem('audioTime', audio.currentTime);
		            });
		        };
		
		        function togglePlay() {
		            var audio = document.getElementById('audioPlayer');
		            if (audio.paused) {
		                audio.play();
		            } else {
		                audio.pause();
		            }
		        }
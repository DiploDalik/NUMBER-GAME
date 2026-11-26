let random;
        let gameo = false;
        let attempts = 0;


        function start() {
            random = Math.floor(Math.random() * 100) +  1;
        }
        start();


        function newg() {
            gameo = false;
            attempts = 0;
            document.getElementById("attempts").textContent = attempts;
            document.getElementById("THENUMBER").value = ""; 
            document.getElementById("result").innerHTML = "🎮 آماده‌ای؟ یک عدد بین ۱ تا ۱۰۰ حدس بزن!";
            start();
        }
        

        function check() {

            if (gameo) { return; }

            let user = document.getElementById("THENUMBER").value;
            let text = document.getElementById("result");

            if (user.trim() === "") {
                text.innerHTML = "⚠️ هنوز عددی وارد نکردی! اول حدست رو بنویس.";
                return;
            }

            user = Number(user);
            if (!Number.isInteger(user)) {
                text.innerHTML = "	❌ ورودی نامعتبره! لطفاً یک عدد صحیح وارد کن."
                return;
            }

            if (user < 1 || user > 100) {
                text.innerHTML = "🎯 عدد باید بین ۱ تا ۱۰۰ باشه. دوباره تلاش کن!"
                return;
            }

            if (user == random) {
                text.innerHTML = "🏆 آفرین! فوق‌العاده بود! عدد مخفی رو پیدا کردی!";
                gameo = true;
                attempts++;
                document.getElementById("attempts").textContent = attempts;
            }
            
            else if (user > random) {
                text.innerHTML = "🔻 کمی پایین‌تر! عدد مخفی از حدس تو کوچک‌تره.";
                attempts++;
                document.getElementById("attempts").textContent = attempts;
            }
            
            else {
                text.innerHTML = "	🔺 کمی بالاتر! عدد مخفی از حدس تو بزرگ‌تره.";
                attempts++;
                document.getElementById("attempts").textContent = attempts;
            }

        }
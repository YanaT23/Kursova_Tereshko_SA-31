document.addEventListener('DOMContentLoaded', function () {
  const homeBtn = document.getElementById('homeBtn');
  const registerBtn = document.getElementById('registerBtn');
  const loginBtn = document.getElementById('loginBtn');
  const mainContent = document.getElementById('mainContent');

  homeBtn.addEventListener('click', showHomePage);
  registerBtn.addEventListener('click', showRegistrationPage);
  loginBtn.addEventListener('click', showLoginPage);


// Відобразити сторінку головну
  function showHomePage() {
    mainContent.innerHTML = `
          <div class="contact-info">
      <h2>Контактна інформація</h2>
      <p>Телефони: +380123321123, +380321123321</p>
      <p>Email: AYAclinic@gmail.com</p>
      <p>Адреса: вул. Лікарська, 123, м.Львів </p>
      <p>Соціальні мережі: <a href="#">Facebook</a>, <a href="#">Instagram</a></p>
    </div>

    <div class="about-us">
      <h2>Про нас</h2>
      <p>Ласкаво просимо до нашої косметологічної клініки, де ми забезпечуємо індивідуальний та високоякісний підхід до догляду за вашою красою та здоров'ям. 
      Наша місія - створити безпечне та комфортне середовище, де ви можете відчути себе впевнено та задоволено своїм виглядом.</p>
     
      <h3>Наші фахівці</h3>
      <p>Наш колектив об'єднує досвід та професіоналізм у галузі косметології. Кожен з наших лікарів - висококваліфікований спеціаліст, який стежить за останніми тенденціями в галузі, постійно підвищує свою кваліфікацію та працює в інтересах вашої краси та здоров'я.
      Наші фахівці спеціалізуються в різних областях косметології, включаючи дерматологію, естетичну хірургію, ін'єкційну терапію, лазерні процедури та інше. </p>

      <h3>Наше обладнання</h3>
      <p>Наша клініка оснащена передовим обладнанням, яке використовується для проведення сучасних та ефективних процедур у галузі косметології. 
      Ми інвестуємо в технології, що забезпечують безпеку та високу ефективність лікування, щоб ви могли отримати найкращі результати..</p>

      <h3>Відгуки</h3>
      <p>Найкращим підтвердженням нашої якості є відгуки наших клієнтів. Ми пишаємося тим, що ми отримали вдячні відгуки від осіб, які вже скористалися нашими послугами. 
      Це свідчення про те, що наша команда фахівців докладає максимум зусиль для задоволення потреб та очікувань наших пацієнтів. </p>
      <p> Оксана С.
      Дуже задоволена результатами ботокс-терапії у цій клініці! Фахівці тут - справжні професіонали своєї справи. Обслуговування на вищому рівні, а результати перевершують всі мої очікування. Рекомендую з усієї душі!
      </p>
      <p>Максим Л.
      Проходив лазерну епіляцію, і результат мене приємно вражає. Зручно розташована клініка, привітний персонал і передове обладнання. Велике спасибі за якісне обслуговування!
      </p>
      <p>Анна К
      Мезотерапія обличчя тут - просто чудо! Шкіра стала більш еластичною та свіжою. Лікар пояснив усі деталі процедури, відповів на всі мої питання. Рекомендую клініку своїм подругам.
      </p>
      <p>Ігор П.
      Звертався для видалення пігментних плям. Лікар провів детальну консультацію, пояснив, як відбувається процедура. Результат - бездоганний! Дякую за турботу про мою шкіру.
      </p>
      <p>Марія Г.
      Масаж обличчя та шиї був справжнім розкішним досвідом. Досвідчений та ввічливий персонал зробив усе, щоб я відчувала себе комфортно. Після процедури відчуваю себе освіженою та розслабленою. Обов'язково повернусь сюди ще раз!</p>

      <h3>Каталог послуг</h3>
      <p>Дерматологічні консультації - від 1200 грн, час: 30 хв.</p>
      <p> Ботокс-терапія - від 3000 грн, час: 1 год.</p>
      <p> Філери для виправлення зморшок - від 2500 грн, час: 1 год.</p>
      <p>Лазерна епіляція - від 1500 грн, час: залежить від зони.</p>
      <p>Мезотерапія обличчя - від 2000 грн, час: 45 хв.</p>
      <p>Хірургічне видалення пігментних плям - від 3500 грн, час: 1,5 год.</p>
      <p>Пілінг обличчя - від 1800 грн, час: 45 хв.</p>
      <p>Масаж обличчя та шиї - від 800 грн, час: 30 хв.</p>
      <p>Контурна пластика губ - від 2500 грн, час: 1 год.</p>
      <p>Мікродермабразія - від 1200 грн, час: 45 хв.</p>
      <p>Ліфтинг-процедури з використанням апаратів - від 2000 грн, час: залежить від процедури.</p>
      <p>Манікюр та педикюр медичний - від 500 грн, час: 1 год.</p>
      <p>Лікування акне та постакне - від 1800 грн, час: залежить від стану шкіри.</p>
      <p>Корекція форми бровей - від 600 грн, час: 30 хв.</p>
      <p>Гідрофація з використанням спеціальних сировин - від 2500 грн, час: 1 год.</p>
      <p>Ціни та час виконання можуть змінюватися в залежності від зони, обраної техніки та індивідуальних особливостей.</p>

      <h3>Каталог акційних пропозицій</h3>
      <p>Пропозиція місяця: Пілінг обличчя + масаж обличчя та шиї - від 2200 грн замість 2600 грн, час: 75 хв.</p>

      <h3>Наукові статті</h3>
      <p>Стаття місяця: Пілінг обличчя та Масаж обличчя та шиї: Дві Ключові Процедури для Здоров'я та Краси Шкіри</p>
      Здорова та сяюча шкіра є однією з ключових складових нашої краси та самопочуття. Для досягнення ідеального стану шкіри і відновлення її молодість регулярні процедури, такі як пілінг обличчя та масаж обличчя та шиї, стають невід'ємною частиною ритуалу краси.
      <p>Пілінг обличчя: Оновлення та Зволоження</p>
      <p>Пілінг обличчя - це ефективна процедура, спрямована на видалення відмерлих клітин шкіри та стимулювання регенерації нових. Під дією спеціальних ексфоліюючих речовин, пілінг допомагає вирівняти тон шкіри, позбутися чорних точок та зменшити пігментацію. Результат - шкіра стає гладенькою, сяючою та молодішою. Пілінг також підготовляє шкіру до кращого всмоктування корисних речовин з подальших процедур догляду.</p>
      <p>Масаж обличчя та шиї: Розслаблення та Відновлення Енергії</p>
      <p>Масаж обличчя та шиї - це не лише розкош, але і потужний засіб для покращення кровообігу, зняття напруги та відновлення м’язово-тканинної еластичності. Дренажні рухи допомагають зменшити набряки, а вплив на активні точки стимулює процеси внутрішньої регенерації. Після масажу обличчя ви відчуєте не лише зовнішню красу, але і внутрішнє спокійство.</p>
      <p> Комбінуючи пілінг обличчя та масаж, ви створюєте ідеальний альянс для здоров'я та молодість вашої шкіри. Ці процедури взаємодоповнюють одна одну, надаючи вашому обличчю неперевершений вигляд та стимулюючи процеси внутрішнього омолодження. Нехай це буде вашим щоденним подарунком для шкіри, який призведе до бездоганного вигляду та внутрішнього балансу. </p>
    </div>
    `;
  }

// Відобразити сторінку реєстрації
  function showRegistrationPage() {
    mainContent.innerHTML = `
      <form>
        <label for="phone">Ввести номер телефону</label>
        <input type="tel" id="phone" name="phone" required>

        <label for="email">Ввести електронну адресу</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Ввести пароль</label>
        <input type="password" id="password" name="password" required>

        <label for="confirmPassword">Підтвердити пароль</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>

        <button type="button" id="registerSubmitBtn">Зареєструватися</button>
      </form>
    `;

    const registerSubmitBtn = document.getElementById('registerSubmitBtn');
    registerSubmitBtn.addEventListener('click', register);
  }

  function register() {
    const phoneInput = document.getElementById('phone').value;
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const confirmPasswordInput = document.getElementById('confirmPassword').value;

    // Registration logic
    if (phoneInput === '0959877899' && emailInput === 'tereshkoyana@gmail.com' &&
        passwordInput === 'tereshkoyana' && confirmPasswordInput === 'tereshkoyana') {
      mainContent.innerHTML = `<p class="success-message">Ви успішно зареєстровані!</p>`;
    } else {
      mainContent.innerHTML = `<p class="error-message">Неправильні дані для реєстрації</p>`;
    }
  }

// Відобразити сторінку вхід
  function showLoginPage() {
    mainContent.innerHTML = `
      <form id="loginForm">
        <label for="login">Ввести логін</label>
        <input type="text" id="loginInput" name="login" required>

        <label for="password">Ввести пароль</label>
        <input type="password" id="passwordInput" name="password" required>

        <button type="button" id="loginSubmitBtn">Увійти</button>
      </form>
    `;

    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    loginSubmitBtn.addEventListener('click', login);
  }

  function login() {
    const loginInput = document.getElementById('loginInput').value;
    const passwordInput = document.getElementById('passwordInput').value;

    if (loginInput === 'tereshko' && passwordInput === 'tereshkoyana') {
        showCatalogPage();
    } else if (loginInput === 'salo' && passwordInput === 'salooksana') {
        showAdminPage();
    } else if (loginInput === 'nedro' && passwordInput === 'nedronazar') {
        showDoctorPage();
    } else {
        mainContent.innerHTML = `<p class="error-message">Неправильний логін або пароль</p>`;
    }
}

// Відобразити сторінку запису на прийом
  function showCatalogPage() {
    mainContent.innerHTML = `
      <form id="appointmentForm">
        <label for="selectService">Виберіть послугу:</label>
        <select id="selectService" multiple>
          <option value="dermatological_consultations">Дерматологічні консультації - від 1200 грн, час: 30 хв.</option>
          <option value="botox_therapy">Ботокс-терапія - від 3000 грн, час: 1 год.</option>
          <option value="fillers_for_wrinkle_correction">Філери для виправлення зморшок - від 2500 грн, час: 1 год.</option>
          <option value="laser_epilation">Лазерна епіляція - від 1500 грн, час: залежить від зони.</option>
          <option value="mesotherapy_face">Мезотерапія обличчя - від 2000 грн, час: 45 хв.</option>
          <option value="surgical_removal_of_pigment_spots">Хірургічне видалення пігментних плям - від 3500 грн, час: 1,5 год.</option>
          <option value="facial_peeling">Пілінг обличчя - від 1800 грн, час: 45 хв.</option>
          <option value="facial_and_neck_massage">Масаж обличчя та шиї - від 800 грн, час: 30 хв.</option>
          <option value="lip_contour_plastic">Контурна пластика губ - від 2500 грн, час: 1 год.</option>
          <option value="microdermabrasion">Мікродермабразія - від 1200 грн, час: 45 хв.</option>
          <option value="lifting_procedures_with_devices">Ліфтинг-процедури з використанням апаратів - від 2000 грн, час: залежить від процедури.</option>
          <option value="medical_manicure_and_pedicure">Манікюр та педикюр медичний - від 500 грн, час: 1 год.</option>
          <option value="acne_and_post_acne_treatment">Лікування акне та постакне - від 1800 грн, час: залежить від стану шкіри.</option>
          <option value="eyebrow_shape_correction">Корекція форми бровей - від 600 грн, час: 30 хв.</option>
          <option value="hydrophacia_with_the_use_of_special_raw_materials">Гідрофація з використанням спеціальних сировин - від 2500 грн, час: 1 год.</option>
        </select>

       <label for="appointmentDateTime">Оберіть дату та час прийому:</label>
        <input type="datetime-local" id="appointmentDateTime" name="appointmentDateTime">

      <button type="button" id="btnBookAppointment" onclick="showLoginPage()">ЗАПИСАТИСЯ НА ПРИЙОМ</button>

      </form>
    `;
    const btnBookAppointment = document.getElementById('btnBookAppointment');
    btnBookAppointment.addEventListener('click', bookAppointment);
}

  function navigateToLoginPage() {
    showLoginPage();
} 
function bookAppointment() {
    // Створюємо елемент повідомлення
    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Ваш запис на прийом надіслано';

    // Додаємо стилі для центрування та збільшення розміру шрифту
    confirmationMessage.style.textAlign = 'center';
    confirmationMessage.style.fontSize = '24px';
    confirmationMessage.style.marginTop = '20px';

    // Додаємо елемент на сторінку
    mainContent.appendChild(confirmationMessage);

    // Зникаємо через 3 секунди
    setTimeout(function () {
        confirmationMessage.style.display = 'none';
    }, 3000);
  }

// Відобразити сторінку адміністратора
   function showAdminPage() {
            mainContent.innerHTML = `
                <div>
                    <p>Запис на "Хірургічне видалення пігментних плям" від користувача Tereshko Yana на 01.01.24 о 12:00</p>
                   <button type="button" id="btnConfirm" onclick="navigateToLoginPage()" style="background-color: #bf8f68; color: white; border: none; padding: 15px 20px;">ПІДТВЕРДИТИ</button>
                </div>
            `;
        }

 // Відобразити сторінку медичного персоналу      
  function showDoctorPage() {
    mainContent.innerHTML = `
        <div>
            <p>Внести дані про прийом "Хірургічне видалення пігментних плям" користувача Tereshko Yana на 01.01.24 о 12:00</p>
            
            <textarea id="appointmentData" rows="4" cols="50" placeholder="Введіть дані тут..."></textarea>
            
            <br> <!-- Додано новий рядок -->
            
            <button type="button" id="btnProvideResults" onclick="navigateToLoginPage()" style="background-color: #bf8f68; color: white; border: none; padding: 15px 20px; margin-top: 10px;">НАДАТИ РЕЗУЛЬТАТИ</button>
        </div>
    `;
}

  // Додав подію для кнопки "ПІДТВЕРДИТИ"
  mainContent.addEventListener('click', function (event) {
    if (event.target.id === 'btnConfirm') {
      navigateToLoginPage();
    }
  });

  // Додав подію для кнопки "НАДАТИ РЕЗУЛЬТАТИ"
  mainContent.addEventListener('click', function (event) {
    if (event.target.id === 'btnProvideResults') {
      navigateToLoginPage();
    }
  });
    
});
 

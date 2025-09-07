// قائمة الطعام الكاملة من هنقرستيشن مع الصور الحقيقية
const menuData = {
    salads: [
        {
            id: 1,
            name: "سلطة ترند",
            description: "خص رماني-جرجير-دجاج-ملفوف احمر-ملفوف ابيض-رمان-افوكادو-بروكلي-بذور اليقطين-بيستو-جبنة فيتا-ماتاى-بذور شيأ_طماطم شيري-صلصة الخاصة",
            price: 38,
            calories: 410,
            image: "images/salad_trend_real.webp",
            category: "salads"
        },
        {
            id: 2,
            name: "سلطة سمبريرو",
            description: "خس روماني، جرجير مستورد، طماطم، ذرة حلوة، فاصولياء سوداء، خبز محمص، كزبرة، تقدم مع صلصة الكزبرة الخاصة بنا",
            price: 36,
            calories: 365,
            image: "images/salad_sembriro_real.webp",
            category: "salads"
        },
        {
            id: 3,
            name: "كرانشي السلطة المقرمشة بالدجاج المدخن",
            description: "دجاج مشوي خس جرجير فلفل بارد رمان،جزر بطاطا حلوة،جبنتة الفيتا جوز مكرمل،صلصة الفرنسية المدخنة",
            price: 37,
            calories: 420,
            image: "images/salad_crunchy_real.webp",
            category: "salads"
        },
        {
            id: 4,
            name: "سلطة الجرجير",
            description: "جرجير فراولة جبن فيتا رمان قطع خبز بر محمص في الفرن كينوا مشمش مجفف شمندر جوز مكرمل شرائح لوز مع صوص دبس الرمان اللذيذ",
            price: 35,
            calories: 350,
            image: "images/salad_arugula_real.webp",
            category: "salads"
        },
        {
            id: 5,
            name: "سلطة الخضار محمصة و المقرمشة",
            description: "خس،جرجير،بنجر،بطاطا حلوة،جزر محمص،كوسة محمصة،جبنة الماعز مع صوص الحمضيات",
            price: 34,
            calories: 370,
            image: "images/salad_roasted_real.webp",
            category: "salads"
        },
        {
            id: 6,
            name: "سلطة روبيان",
            description: "روبيان خس ايس بيرق جرجير مستورد فاصوليا حمراء طماطم كرزية خيار مكرونة بيستو زيتون اخضر فلفل اصفر درة حلوة جبنة بارميزان تقدم مع صوص الحمضيات",
            price: 38,
            calories: 380,
            image: "images/salad_shrimp_real.webp",
            category: "salads"
        },
        {
            id: 7,
            name: "سلطة السالمون",
            description: "جبنة فيتا مكرونا بيستو ادمامي ليمون اخضر شبت فلفل اخضر بصل اخضر خس روماني زيتون اخضر خيار طماطم كرزية سالمون تقدم مع صوص الديجون ماسترد",
            price: 39,
            calories: 390,
            image: "images/salad_salmon_real.webp",
            category: "salads"
        },
        {
            id: 8,
            name: "سلطة الكراب",
            description: "ملفوف ابيض ، ملفوف احمر ، خيار ، جزر ،فلفل احمر بارد ، ادامي، طماطم شيري ، مانجو ، كراب ستيك ، فول سوداني ، مكسرات ، كزبرة ، سمسم ، حبة سوداء ، بصل اخضر. تقدم مع صوص الكراب الخاص",
            price: 37,
            calories: 466,
            image: "images/salad_crab_real.webp",
            category: "salads"
        },
        {
            id: 9,
            name: "سلطة كال",
            description: "تحضر من خس الكيل،والكينوا،والخيار،وطماطم الكرزية، جبنة الريكوتا مع البطاطا المحمرة،والبصل الأحمرمع صوص الرمان",
            price: 37,
            calories: 435,
            image: "images/salad_kale_real.webp",
            category: "salads"
        },
        {
            id: 10,
            name: "سلطة فتوش فريك",
            description: "خس،خيار،طماطم،بقدونس،نعناع،فريك،زيت زيتون،ليمون مع الخبز المحمص",
            price: 37,
            calories: 490,
            image: "images/salad_fattoush_real.webp",
            category: "salads"
        },
        {
            id: 11,
            name: "سلطة دجاج مكسيكية",
            description: "خس،دجاج،كزبرة،ذرة،فاصوليا حمراء،طماطم،جبنة شيدر مع الصوص المكسيكي",
            price: 37,
            calories: 490,
            image: "images/salad_mexican_chicken_real.webp",
            category: "salads"
        }
    ],
    boxes: [
        {
            id: 12,
            name: "بوكس السلطات ٦",
            description: "بوكس ترند سالاد مكون من ٦ علب من السلطات الخاصة مع الصوصات وبطاطس ودجز المشوية",
            price: 92,
            calories: 2100,
            image: "images/box_6_salads_real.webp",
            category: "boxes"
        },
        {
            id: 13,
            name: "بوكس السلطات ١٠",
            description: "بوكس ترند سالاد مكون من ١٠ علب من السلطات الخاصة مع الصوصات",
            price: 120,
            calories: 3500,
            image: "images/box_10_salads_real.webp",
            category: "boxes"
        },
        {
            id: 14,
            name: "بوكس الساندويتش",
            description: "ساندوتش ستيك - ساندوتش حلوم - ساندوتش دجاج - ساندوتش جبن",
            price: 122,
            calories: 1800,
            image: "images/sandwich_box_real.webp",
            category: "boxes"
        },
        {
            id: 15,
            name: "سبيشل تريو بوكس",
            description: "استمتع بوجبة متكاملة تحتوي على سلطة + ساندوتش + عصير طبيعي",
            price: 49,
            calories: 650,
            image: "images/special_trio_box_real.webp",
            category: "boxes"
        }
    ],
    burgers: [
        {
            id: 16,
            name: "ساندوتش الأجبان الثلاث",
            description: "خبز توست، جبن شيدر، جبن موتزاريلا، جبن كريمي، خس، طماطم",
            price: 23,
            calories: 450,
            image: "images/sandwich_three_cheese_real.webp",
            category: "burgers"
        },
        {
            id: 17,
            name: "برجر لحم كيتو",
            description: "خس بصل طماطم خيار لحم مشوي جبن شيدر أفوكادو",
            price: 31,
            calories: 520,
            image: "images/burger_keto_beef_real.webp",
            category: "burgers"
        },
        {
            id: 18,
            name: "برجر دجاج كيتو",
            description: "خس-بصل-طماطم-خيار-دجاج مشوي-جبن شيدر-أفوكادو",
            price: 28,
            calories: 480,
            image: "images/burger_keto_chicken_real.webp",
            category: "burgers"
        },
        {
            id: 19,
            name: "برجر لحم مشوي",
            description: "خبز توست بر خس طماطم بصل لحم مشوي جبن شيدر",
            price: 33,
            calories: 580,
            image: "images/burger_grilled_beef_real.webp",
            category: "burgers"
        },
        {
            id: 20,
            name: "برجر دجاج مشوي",
            description: "خبز توست بر خس طماطم بصل دجاج مشوي جبن شيدر",
            price: 28,
            calories: 520,
            image: "images/burger_grilled_chicken_real.webp",
            category: "burgers"
        }
    ],
    meals: [
        {
            id: 21,
            name: "وجبة دجاج فاهيتا",
            description: "دجاج فلفل الوان بصل توابل مكسيكية جبن شيدر أرز بسمتي",
            price: 37,
            calories: 650,
            image: "images/meal_chicken_fajita_real.webp",
            category: "meals"
        },
        {
            id: 22,
            name: "وجبة دجاج بيستو",
            description: "دجاج مشوي طماطم بيستو جبن بارميزان أرز بسمتي",
            price: 37,
            calories: 620,
            image: "images/meal_chicken_pesto_real.webp",
            category: "meals"
        },
        {
            id: 23,
            name: "وجبة الروبيان بالكاجون",
            description: "وجبة الروبيان بالكاجون مع البطاطس المشوية",
            price: 43,
            calories: 580,
            image: "images/meal_shrimp_cajun_real.webp",
            category: "meals"
        },
        {
            id: 24,
            name: "وجبة لحم ماشروم",
            description: "وجبة لحم ماشروم مع البطاطس المشوية",
            price: 41,
            calories: 720,
            image: "images/meal_beef_mushroom_real.webp",
            category: "meals"
        },
        {
            id: 25,
            name: "وجبة دجاج المكسيكي",
            description: "دجاج بالتوابل المكسيكية مع الأرز والخضار",
            price: 37,
            calories: 590,
            image: "images/meal_chicken_mexican_real.webp",
            category: "meals"
        },
        {
            id: 26,
            name: "وجبة دجاج شيش طاوق",
            description: "صدور دجاج مشوية مع الخضار والأرز",
            price: 37,
            calories: 590,
            image: "images/meal_chicken_shish_tawook_real.webp",
            category: "meals"
        },
        {
            id: 27,
            name: "وجبة دجاج ترياكي",
            description: "صدور دجاج مشوية بصوص الترياكي مع الأرز والخضار",
            price: 37,
            calories: 580,
            image: "images/meal_chicken_teriyaki_real.webp",
            category: "meals"
        },
        {
            id: 28,
            name: "وجبة دجاج سيشوان",
            description: "صدور دجاج مشوية بالتوابل الآسيوية مع الأرز",
            price: 37,
            calories: 590,
            image: "images/meal_chicken_szechuan_real.webp",
            category: "meals"
        },
        {
            id: 29,
            name: "وجبة الدجاج المشوي",
            description: "صدور دجاج مشوية مع الخضار المتنوعة والأرز",
            price: 37,
            calories: 560,
            image: "images/meal_grilled_chicken_real.webp",
            category: "meals"
        },
        {
            id: 30,
            name: "وجبة دجاج ليمون",
            description: "صدور دجاج طازجة مع الليمون والأعشاب",
            price: 37,
            calories: 550,
            image: "images/meal_chicken_lemon_real.webp",
            category: "meals"
        },
        {
            id: 31,
            name: "وجبة سلمون المشوي",
            description: "قطعة سلمون مشوية مع الخضار والأرز",
            price: 44,
            calories: 480,
            image: "images/meal_grilled_salmon_real.webp",
            category: "meals"
        }
    ],
    juices: [
        {
            id: 32,
            name: "عصير جزر برتقال",
            description: "مزيج من عصير الجزر والبرتقال الطازج",
            price: 14,
            calories: 85,
            image: "images/juice_carrot_orange_real.webp",
            category: "juices"
        },
        {
            id: 33,
            name: "عصير البرتقال",
            description: "عصير برتقال طازج",
            price: 12,
            calories: 94,
            image: "images/juice_orange_real.webp",
            category: "juices"
        },
        {
            id: 34,
            name: "عصير بوم ذا بوم",
            description: "عصير رمان وبرتقال طازج",
            price: 15,
            calories: 110,
            image: "images/juice_boom_tha_boom_real.webp",
            category: "juices"
        },
        {
            id: 35,
            name: "عصير شمندر مع برتقال",
            description: "عصير شمندر مع البرتقال الطازج",
            price: 15,
            calories: 95,
            image: "images/juice_beetroot_orange_real.webp",
            category: "juices"
        }
    ],
    drinks: [
        {
            id: 36,
            name: "نوفا 250 مل",
            description: "مياة عذبة للشرب نقية ومنعشة",
            price: 4,
            calories: 0,
            image: "images/water_nova_real.webp",
            category: "drinks"
        },
        {
            id: 37,
            name: "نوفا فوارة 250 مل",
            description: "مياة عذبة للشرب نقية ومنعشة",
            price: 5,
            calories: 0,
            image: "images/water_nova_sparkling_real.webp",
            category: "drinks"
        },
        {
            id: 38,
            name: "سفن اب دايت مشروب غازي",
            description: "سفن اب زجاج 250 مل",
            price: 5,
            calories: 0,
            image: "images/seven_up_diet_real.webp",
            category: "drinks"
        },
        {
            id: 39,
            name: "سفن اب مشروب غازي",
            description: "سفن اب زجاج 250 مل",
            price: 5,
            calories: 150,
            image: "images/seven_up_real.webp",
            category: "drinks"
        },
        {
            id: 40,
            name: "مشروب غازي ببسي",
            description: "بيبسي زجاج 250 مل",
            price: 5,
            calories: 150,
            image: "images/pepsi_real.webp",
            category: "drinks"
        },
        {
            id: 41,
            name: "مشروب غازي دايت ببسي",
            description: "ببسي دايت زجاج 250 مل",
            price: 5,
            calories: 0,
            image: "images/pepsi_diet_real.webp",
            category: "drinks"
        }
    ]
};

// متغيرات عامة
let currentCategory = 'salads';
let selectedItems = [];
let userCalories = {
    bmr: 0,
    tdee: 0
};

// تحميل التطبيق
document.addEventListener('DOMContentLoaded', function() {
    // إخفاء شاشة التحميل بعد 2 ثانية
    setTimeout(() => {
        document.body.classList.add('loaded');
        document.getElementById('loading').style.display = 'none';
    }, 2000);

    // تحميل الصفحة الرئيسية
    showPage('home');
    loadFeaturedItems();
    loadMenuItems();
    setupEventListeners();
});

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // أزرار التصنيفات
    const categoryTabs = document.querySelectorAll('.tab-btn');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            switchCategory(category);
        });
    });

    // أزرار الاشتراك
    const subscribeButtons = document.querySelectorAll('.subscribe-btn');
    subscribeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.closest('.plan-card').querySelector('h3').textContent;
            alert(`شكراً لاختيارك ${planName}! سيتم التواصل معك قريباً عبر الواتساب.`);
            // يمكن إضافة رابط واتساب هنا
            window.open('https://wa.me/966540402408?text=أريد الاشتراك في ' + planName, '_blank');
        });
    });
}

// عرض الصفحات
function showPage(pageId) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // عرض الصفحة المطلوبة
    document.getElementById(pageId + '-page').classList.add('active');

    // تحديث التنقل السفلي
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeNavBtn = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (activeNavBtn) {
        activeNavBtn.classList.add('active');
    }

    // تحميل محتوى خاص بالصفحة
    if (pageId === 'menu') {
        loadMenuItems();
    } else if (pageId === 'calories') {
        updateSelectedItemsList();
    }
}

// تحميل الأطباق المميزة
function loadFeaturedItems() {
    const featuredContainer = document.getElementById('featured-menu');
    const featuredItems = [
        menuData.salads[0], // سلطة ترند
        menuData.salads[1], // سلطة سمبريرو
        menuData.burgers[1], // برجر لحم كيتو
        menuData.meals[0]   // وجبة دجاج فاهيتا
    ];

    featuredContainer.innerHTML = featuredItems.map(item => createMenuItemHTML(item)).join('');
}

// تحميل عناصر القائمة
function loadMenuItems() {
    const menuContainer = document.getElementById('menu-items');
    const items = menuData[currentCategory] || [];
    
    menuContainer.innerHTML = items.map(item => createMenuItemHTML(item)).join('');
}

// إنشاء HTML لعنصر القائمة
function createMenuItemHTML(item) {
    return `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='images/trend_salad_logo.png'">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">${item.price} ريال</span>
                    <span class="calories">${item.calories} سعرة</span>
                </div>
                <button class="add-btn" onclick="addToCalculator(${item.id})">
                    <i class="fas fa-plus"></i>
                    أضف للحاسبة
                </button>
            </div>
        </div>
    `;
}

// تبديل التصنيف
function switchCategory(category) {
    currentCategory = category;
    
    // تحديث أزرار التصنيفات
    const categoryTabs = document.querySelectorAll('.tab-btn');
    categoryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });

    // تحميل العناصر الجديدة
    loadMenuItems();
}

// إضافة عنصر لحاسبة السعرات
function addToCalculator(itemId) {
    // البحث عن العنصر في جميع التصنيفات
    let item = null;
    for (const category in menuData) {
        item = menuData[category].find(i => i.id === itemId);
        if (item) break;
    }

    if (item) {
        // التحقق من عدم وجود العنصر مسبقاً
        const existingItem = selectedItems.find(i => i.id === itemId);
        if (existingItem) {
            alert('هذا الطبق موجود بالفعل في حاسبة السعرات');
            return;
        }

        selectedItems.push(item);
        updateSelectedItemsList();
        
        // عرض رسالة تأكيد
        const addBtn = event.target;
        const originalText = addBtn.innerHTML;
        addBtn.innerHTML = '<i class="fas fa-check"></i> تم الإضافة';
        addBtn.style.background = '#45a049';
        
        setTimeout(() => {
            addBtn.innerHTML = originalText;
            addBtn.style.background = '#4CAF50';
        }, 1500);
    }
}

// تحديث قائمة العناصر المختارة
function updateSelectedItemsList() {
    const selectedList = document.getElementById('selected-items-list');
    const totalCaloriesElement = document.getElementById('total-calories');

    if (selectedItems.length === 0) {
        selectedList.innerHTML = '<p class="empty-message">لم تختر أي أطباق بعد</p>';
        totalCaloriesElement.textContent = '0 سعرة';
        return;
    }

    const totalCalories = selectedItems.reduce((sum, item) => sum + item.calories, 0);
    
    selectedList.innerHTML = selectedItems.map(item => `
        <div class="selected-item">
            <div class="selected-item-info">
                <h4>${item.name}</h4>
                <p>${item.calories} سعرة - ${item.price} ريال</p>
            </div>
            <button class="remove-btn" onclick="removeFromCalculator(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');

    totalCaloriesElement.textContent = `${totalCalories} سعرة`;
}

// إزالة عنصر من حاسبة السعرات
function removeFromCalculator(itemId) {
    selectedItems = selectedItems.filter(item => item.id !== itemId);
    updateSelectedItemsList();
}

// حساب السعرات الحرارية
function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;

    // التحقق من صحة البيانات
    if (!age || !weight || !height) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    // حساب معدل الأيض الأساسي (BMR)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // حساب إجمالي الطاقة المطلوبة (TDEE)
    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
    };

    const tdee = bmr * activityMultipliers[activity];

    // حفظ النتائج
    userCalories.bmr = Math.round(bmr);
    userCalories.tdee = Math.round(tdee);

    // عرض النتائج
    document.getElementById('bmr-result').textContent = `${userCalories.bmr} سعرة`;
    document.getElementById('tdee-result').textContent = `${userCalories.tdee} سعرة`;
    document.getElementById('calorie-results').style.display = 'block';

    // التمرير إلى النتائج
    document.getElementById('calorie-results').scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
    });
}

// دالة للتمرير السلس
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
}

// إضافة تأثيرات تفاعلية
document.addEventListener('DOMContentLoaded', function() {
    // تأثير hover للعناصر
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});


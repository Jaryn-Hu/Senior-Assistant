document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const questionScreen = document.getElementById('question-screen');
    const analysisScreen = document.getElementById('analysis-screen');
    const planScreen = document.getElementById('plan-screen');

    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const adjustButton = document.getElementById('adjust-button');
    const confirmButton = document.getElementById('confirm-button');

    const questionTitle = document.getElementById('question-title');
    const questionDescription = document.getElementById('question-description');
    const userInput = document.getElementById('user-input');
    const planContent = document.getElementById('plan-content');

    const questions = [
        {
            id: 'current_situation',
            title: "您目前的副业情况是怎样的？",
            description: "请选择最符合您情况的选项：1) 已有副业 2) 想要开始副业，有想法 3) 想要开始副业，但没有具体想法 4) 目前没有考虑副业"
        },
        {
            id: 'skills',
            title: "您认为自己擅长哪些技能或有哪些特长？",
            description: "请列出3-5项您认为自己擅长的技能或特长，无论是否与工作相关。"
        },
        {
            id: 'interests',
            title: "您有哪些兴趣爱好或热衷的领域？",
            description: "请分享2-3个您感兴趣的领域或话题。"
        },
        {
            id: 'time',
            title: "您每周大概能投入多少时间在副业上？",
            description: "请估算您每周可以稳定投入的时间（小时）。"
        },
        {
            id: 'goals',
            title: "您希望通过副业实现什么目标？",
            description: "例如：增加收入、学习新技能、实现自我价值等。请具体说明。"
        },
        {
            id: 'challenges',
            title: "您在开始或维持副业时面临的最大挑战是什么？",
            description: "例如：时间管理、技能不足、不知道如何开始等。"
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = {};

    startButton.addEventListener('click', () => {
        welcomeScreen.style.display = 'none';
        showNextQuestion();
    });

    nextButton.addEventListener('click', () => {
        const answer = userInput.value.trim();
        if (answer) {
            userAnswers[questions[currentQuestionIndex].id] = answer;
            userInput.value = '';
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showNextQuestion();
            } else {
                showAnalysisScreen();
            }
        }
    });

    adjustButton.addEventListener('click', () => {
        alert("感谢您的反馈！我们会继续优化建议以更好地满足您的需求。");
    });

    confirmButton.addEventListener('click', () => {
        alert("太好了！让我们一起开始这个激动人心的副业之旅吧！");
    });

    function showNextQuestion() {
        questionScreen.style.display = 'block';
        questionTitle.textContent = questions[currentQuestionIndex].title;
        questionDescription.textContent = questions[currentQuestionIndex].description;
    }

    function showAnalysisScreen() {
        questionScreen.style.display = 'none';
        analysisScreen.style.display = 'block';
        setTimeout(showPlan, 3000); // 模拟AI分析过程
    }

    function showPlan() {
        analysisScreen.style.display = 'none';
        planScreen.style.display = 'block';
        
        let plan = generatePersonalizedPlan(userAnswers);
        planContent.innerHTML = plan;
    }

    function generatePersonalizedPlan(answers) {
        let plan = "<h3>基于您的回答，以下是我们的个性化建议：</h3>";

        // 分析当前情况
        if (answers.current_situation.includes("1")) {
            plan += "<p>很高兴看到您已经开始了副业！让我们focus在如何优化和发展它。</p>";
        } else if (answers.current_situation.includes("2")) {
            plan += "<p>您已经有了想法，这是一个很好的开始！我们来看看如何将它付诸实践。</p>";
        } else if (answers.current_situation.includes("3")) {
            plan += "<p>不用担心没有具体想法，我们一起来探索适合您的副业方向。</p>";
        } else {
            plan += "<p>虽然您目前没有考虑副业，但探索新的可能性总是好的。让我们看看有哪些潜在机会！</p>";
        }

        // 分析技能和兴趣
        plan += "<p>基于您的技能（" + answers.skills + "）和兴趣（" + answers.interests + "），以下是一些您可以考虑的副业方向：</p>";
        plan += "<ul>";
        // 这里可以根据技能和兴趣生成具体建议，现在我们用一些通用建议作为示例
        plan += "<li>在线教学或辅导</li>";
        plan += "<li>自由职业（如写作、设计、编程等）</li>";
        plan += "<li>创建和销售数字产品</li>";
        plan += "<li>开设主题博客或YouTube频道</li>";
        plan += "</ul>";

        // 时间管理建议
        plan += "<p>考虑到您每周可以投入 " + answers.time + " 小时，我们建议：</p>";
        plan += "<ul>";
        plan += "<li>制定一个详细的时间表，平衡主业、副业和个人生活</li>";
        plan += "<li>从小规模开始，逐步增加投入时间</li>";
        plan += "<li>使用时间管理工具来提高效率</li>";
        plan += "</ul>";

        // 目标设定
        plan += "<p>为了实现您的目标（" + answers.goals + "），我们建议：</p>";
        plan += "<ul>";
        plan += "<li>设定具体、可衡量、有时限的短期和长期目标</li>";
        plan += "<li>定期回顾和调整您的目标和策略</li>";
        plan += "<li>寻找能够同时满足您的目标的副业机会</li>";
        plan += "</ul>";

        // 应对挑战
        plan += "<p>针对您面临的挑战（" + answers.challenges + "），以下是一些建议：</p>";
        plan += "<ul>";
        plan += "<li>寻找相关在线课程或资源来提升必要的技能</li>";
        plan += "<li>加入相关的在线社区，获取支持和建议</li>";
        plan += "<li>考虑找一个导师或伙伴，互相鼓励和监督</li>";
        plan += "</ul>";

        // 下一步行动计划
        plan += "<h4>建议的下一步行动：</h4>";
        plan += "<ol>";
        plan += "<li>深入研究1-2个最感兴趣的副业方向</li>";
        plan += "<li>制定一个30天的试验计划，包括具体的学习和行动步骤</li>";
        plan += "<li>设置每周回顾时间，评估进展并调整计划</li>";
        plan += "<li>勇敢地迈出第一步，记住：起步比完美更重要！</li>";
        plan += "</ol>";

        return plan;
    }
});

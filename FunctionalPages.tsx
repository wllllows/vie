import React, { useState } from'react';
import './App.css';
import { Modal, Button } from'react-bootstrap';

// 定义问题详情数据的类型，键为具体问题字符串，值为对应详细内容字符串
type QuestionDetailsType = {
    [question: string]: string;
};

const questionDetails: QuestionDetailsType = {
  "如何注册账号？": "你可以在我们官网的注册页面，填写用户名、密码、邮箱等必要信息进行注册，用户名需为6 - 18位字母、数字或下划线组合，密码要求包含大小写字母和数字且不少于8位。填写完成后，系统会发送一封验证邮件到你填写的邮箱，点击邮件中的验证链接即可完成账号注册。",
  "如何找回密码？": "在登录页面点击忘记密码按钮，根据提示输入注册时绑定的邮箱或者手机号，若选择邮箱找回，系统会发送重置密码的链接到对应的邮箱，点击链接进入重置页面按要求设置新密码即可；若选择手机号找回，会收到验证码短信，输入验证码后同样可设置新密码。",
  "如何使用功能 A？": "打开应用后，在主界面找到功能A的入口图标，点击进入功能A界面。接着，先选择你要处理的文件（支持常见的文本、图片格式），然后根据需求选择相应的处理模式，比如快速模式注重处理速度，精准模式注重处理效果，最后点击开始处理按钮即可，处理完成后可在结果展示区查看结果并进行下载等操作。",
  "如何申请退换货？": "首先，在订单详情页点击售后申请按钮，然后选择退换货原因，例如商品质量问题、尺寸不符等，并上传相关凭证（如商品有质量问题的照片、能证明尺寸不符的测量图片等），详细填写备注信息说明情况，提交申请后我们的售后团队会在1 - 3个工作日内与你联系并处理。",
  "如何升级会员等级？": "会员等级与您的消费金额、消费频次以及参与平台活动次数相关。每消费100元积累1个成长值，每成功参与一次平台大型活动可额外获得50成长值。当成长值累计达到500时，自动升级为银卡会员；达到1500升级为金卡会员，不同等级会员享受不同折扣与专属权益。",
  "怎样查看订单物流信息？": "登录账号后，进入个人订单页面，找到对应订单，订单右侧会有一个“查看物流”按钮，点击它便能跳转到物流详情页，实时追踪快递包裹的运输轨迹，合作快递包括顺丰、圆通、中通等主流快递。",
  "平台支持哪些支付方式？": "平台目前支持多种支付方式，常见的有微信支付、支付宝支付，还支持银联卡在线支付以及部分银行的快捷支付。在结算页面选择心仪的支付方式，按照对应流程完成支付操作即可，确保支付环境安全以防信息泄露。",
  "如何联系在线客服？": "您可以在官网右下角找到在线客服入口图标，点击后进入客服聊天窗口，工作时间内客服人员会实时为您解答疑问；或者拨打客服热线 400 - 123 - 4567，按语音提示转接人工客服。",
  "忘记用户名怎么办？": "若忘记用户名，可在登录页面点击“找回用户名”按钮，接着输入您注册时绑定的手机号或邮箱，系统会将用户名发送至对应的手机号短信或邮箱消息中，请注意查收。",
  "下载的文件存储在哪里？": "安卓设备默认下载路径为手机内部存储的‘Download’文件夹；苹果设备可在‘Files’应用里的‘下载项’中查找，您也可以在下载时自行设置存储路径，方便后续快速定位文件。",
  "如何分享平台内容到社交媒体？": "每篇内容页面都设有分享按钮，点击后会弹出支持的社交媒体平台列表，包括微信、微博、QQ 等，选择您想分享的平台，按照提示授权登录相应账号，即可完成分享操作。"
};

const FooterNavigation: React.FC = () => {
    return (
        <div className="footer-nav">
            <div className="left-nav-item">
                <a className="nav-link">首页</a>
            </div>
            <div className="right-nav-item">
                <a className="nav-link">我的反馈</a>
            </div>
        </div>
    );
};

const FunctionalPage: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<string>('');
    const [currentQuestion, setCurrentQuestion] = useState<string>('');

    const handleQuestionClick = (question: string) => {
        setCurrentQuestion(question);
        setCurrentQuestionDetail(questionDetails[question]);
        setShowModal(true);
    };

    return (
        <div className='funcional-page'>
            <FooterNavigation />
            <div style={{fontSize:50, marginTop:70, marginBottom:28}}> answer </div>
            <input type='text' placeholder='搜索你想解决的问题' className='search' />
            <div className='item'>
                <div>常见问题</div>
                {Object.keys(questionDetails).map((question: string, index: number) => (
                    <div key={index} onClick={() => handleQuestionClick(question)}>
                        {question}
                    </div>
                ))}
            </div>
            <div><a
                target='_blank'
                className='qq-link'
                href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=dVDYIEBmaSLjBsXX0hrRN8BwJZnZvMDe&authKey=8oJOsTKV1j4wIN4Y%2BBlEYYw1oNtCvurEw4hNAFn%2BhMhV%2BqgNbgm%2FqddfavrkAgEx&noverify=0&group_code=941596822">
                加入我们的qq群以获取更多资讯
            </a>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} dialogClassName="custom-modal-position">
                <Modal.Header closeButton>
                </Modal.Header>
                <div className='button'>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                        返回
                    </Button>
                    </div>
                <Modal.Body>
                    <div className='title'>{currentQuestion}</div>
                    <div className=''>{currentQuestionDetail}</div>
                </Modal.Body>
                <Modal.Footer >
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default FunctionalPage;
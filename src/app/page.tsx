import Image from 'next/image'
import onBoardingImg from '@/assets/images/onboarding.svg'
import onBoardingImg01 from '@/assets/images/onboarding_01.png'
import kakaoLogin from '@/assets/images/kakao_login.png'

export default function OnBoarding() {
  return (
    <main className="bg-primary h-screen w-full p-5 text-lg font-bold">
      <div>
        <Image
          src={onBoardingImg}
          alt="logo"
          width={170}
          height={154}
          className="mx-auto mb-16 mt-56"
        />
        <Image
          src={onBoardingImg01}
          alt="logo"
          width={265}
          height={160}
          className="mx-auto mb-5"
        />
        <button className="text-primary mx-auto -mt-5 block w-full rounded-lg bg-white py-3">
          로그인
        </button>
        <button className="login-btn">
          <Image
            src={kakaoLogin}
            alt="logo"
            height={58}
            className="mx-auto mt-2"
          />
        </button>
        <div className="mt-3 text-center text-xs text-white">
          계정이 없으신가요?
          <a
            href="/signin"
            className="ml-1">
            회원가입
          </a>
          하기
        </div>
      </div>
    </main>
  )
}

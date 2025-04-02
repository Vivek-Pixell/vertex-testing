'use client';
import React from 'react';

const ourServices = () => {
  return (
    <section className=" my-16 md:my-20">
      <div className=" mx-auto px-4 md:px-24 xl:px-40 ">
        <h4 className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px] uppercase mb-4">
          Our Services
        </h4>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl xl:text-[55px] xl:leading-15 font-semibold xl:tracking-tight text-gray-900">
              Where The Beat Meets business Billboard
            </h3>
          </div>
          <div>
            <div className=" ">
              <p className=" text-gray-600 mb-6">
                Billboard advertising is a powerful marketing too
                businesBillboard advertising is a powerful marketing tool that
                he businesses gain visibility and reach their target audienceses
              </p>
              <button className=" flex justify-center items-center px-6 py-3 gap-2 border border-[[#013249]] text-[#013249] tracking-wider text-sm font-semibold rounded-full cursor-pointer">
                CONTACT NOW{' '}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0684 12.9067L14.3184 19.6567C14.1071 19.868 13.8204 19.9868 13.5215 19.9868C13.2226 19.9868 12.936 19.868 12.7246 19.6567C12.5133 19.4454 12.3946 19.1587 12.3946 18.8598C12.3946 18.5609 12.5133 18.2743 12.7246 18.0629L17.5537 13.2358H3.77246C3.47409 13.2358 3.18794 13.1172 2.97697 12.9063C2.76599 12.6953 2.64746 12.4091 2.64746 12.1108C2.64746 11.8124 2.76599 11.5262 2.97697 11.3153C3.18794 11.1043 3.47409 10.9858 3.77246 10.9858H17.5537L12.7265 6.15576C12.5152 5.94442 12.3964 5.65777 12.3964 5.35888C12.3964 5.06 12.5152 4.77335 12.7265 4.56201C12.9379 4.35067 13.2245 4.23193 13.5234 4.23193C13.8223 4.23193 14.1089 4.35067 14.3203 4.56201L21.0703 11.312C21.1752 11.4167 21.2584 11.541 21.3151 11.6779C21.3718 11.8148 21.4009 11.9616 21.4007 12.1097C21.4005 12.2579 21.3711 12.4046 21.314 12.5414C21.257 12.6781 21.1735 12.8023 21.0684 12.9067Z"
                      fill="#004A6D"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourServices;


import { LoginForm } from "../../components/forms";
import { PageLayout } from "../../components/structure";
import useAuth from "../../hooks/use-auth";

import eaziwash_logo from "../../assets/eazee-wash-logo.png";

export default function Login() {
  const { signin } = useAuth();

  return (
    <PageLayout>
      
      <div>
            <img
              className="mx-auto h-40 w-auto"
              src={eaziwash_logo}
              alt="Workflow"
            />
            {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2> */}
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                start your 14-day free trial
              </a>
            </p> */}
          </div>
        <LoginForm {...{ signin }} />
      
      
    </PageLayout>
  );
}

import { Loader, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";
import { addUser } from "../redux/services/authSlice";
import { blueGrey } from "@mui/material/colors";
import {grey } from "@mui/material/colors";

import Checkbox from "@mui/material/Checkbox";
import { BiSquare } from "react-icons/bi";
import { BiSolidSquare } from "react-icons/bi";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  // const { token } = useSelector((state) => state.authSlice);

  const nav = useNavigate();

  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const form = useForm({
    initialValues: {
      email: "admin@gmail.com",
      password: "asdffdsa",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 7 ? "Password must have at least 8 letters" : null,
    },
  });

  return (
    <div className=" w-screen flex justify-center items-center h-screen bg-transparent">
      
      <div className="relative basis-1/3 bg-[var(--base-color)] h-full">
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            const data = await login(values);
            // const dd= await login(values);
            // console.log('dd',dd);

            console.log(values);
            console.log(data);

            dispatch(addUser({ token: data }));

            if (data) {
              nav("/");
            }

            // if (data?.success) {
            // nav("/");
            // }
          } catch (error) {
            console.log(error);
          }
        })}
        className="absolute top-[50%] left-[60%] -translate-y-[50%]	w-[400px] p-7 flex flex-col border-red-500 gap-2 glass-login"
      >
        <h2 className="font-['Genos'] text-[40px] flex justify-center text-[var(--secondary-color)] font-bold">
          MMS
        </h2>
        <p className=" text-[24px] font-semibold text-white">Welcome Back</p>
        <p className="text-[15px] font-medium text-[var(--font-color)]">
          {" "}
          Welcome Back!{" "}
          <span className=" text-[var(--gray-color)]">
            {" "}
            Please enter your details{" "}
          </span>
        </p>

        <label htmlFor="" className=" text-[16px] text-white font-medium">
          Email
        </label>
        <TextInput
          {...form.getInputProps("email")}
          withAsterisk
          placeholder="Enter your Email..."
          className=" text-[var(--secondary-color)] bg-[var(--base-color)] border-2 rounded-[5px] border-[var(--border-color)]"
        />
        <label htmlFor="" className=" text-[16px] text-white font-medium">
          Password
        </label>

        <PasswordInput
          {...form.getInputProps("password")}
          withAsterisk
          placeholder="Enter your Password..."
          className=" text-[var(--secondary-color)] bg-[var(--base-color)] border-2 rounded-[5px] border-[var(--border-color)]"
        />
        <div className=" flex gap-4 items-center">
          <div className=" flex justify-start items-center gap-2">
            <Checkbox
              {...label}
              icon={<BiSquare />}
              checkedIcon={<BiSolidSquare />}
              sx={{
                color: blueGrey[100],
                "&.Mui-checked": {
                  color: grey[300],
                },'& .MuiSvgIcon-root':{fontSize: 28 }
              }}
            />
            <p className="text-[12px] text-white font-medium cursor-pointer">
              Remember me
            </p>
          </div>

          <Link to={"/register"}>
            <p className="text-[12px] text-[var(--font-color)] font-medium cursor-pointer">
              Forget Password
            </p>
          </Link>
        </div>
        <button
          disabled={isLoading && true}
          type="submit"
          className=" w-full h-[40px] font-semibold text-[16px] myBlueBtn"
        >
          {isLoading ? (
            <div className=" flex justify-center items-center gap-2">
              <Loader color="white" size="xs" />
              <span>Loading....</span>
            </div>
          ) : (
            "Login"
          )}
        </button>
      </form>
      </div>
      <div className="basis-2/3 bg-[var(--sidebar-color)] h-full flex justify-center items-center">
      <svg className="w-[90%] h-[70%] opacity-40" xmlns="http://www.w3.org/2000/svg" width="677.5" height="503.58905" viewBox="0 0 677.5 503.58905" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M504.93713,293.01591c2.06592,.12939,3.20769-2.43738,1.64468-3.93335l-.1555-.61816c.02048-.0495,.04105-.099,.06178-.14838,2.08923-4.98181,9.16992-4.94745,11.24139,.04175,1.83859,4.42816,4.17941,8.86389,4.75578,13.54596,.25838,2.06677,.14214,4.17236-.31648,6.2005,4.30806-9.41058,6.57515-19.68658,6.57515-30.02075,0-2.5965-.14212-5.19299-.43274-7.78296-.23901-2.11853-.56839-4.22409-.99472-6.31033-2.30576-11.27719-7.29852-22.01825-14.50012-30.98962-3.46198-1.89249-6.34906-4.85065-8.09296-8.39651-.6265-1.2789-1.11739-2.65463-1.34991-4.05618,.39398,.05167,1.48557-5.94867,1.18842-6.3168,.54906-.83316,1.53178-1.24734,2.13144-2.06033,2.98232-4.0434,7.0912-3.3374,9.23621,2.15726,4.58224,2.31265,4.62659,6.14807,1.81496,9.83682-1.78877,2.34683-2.03456,5.52234-3.60408,8.03479,.16151,.2067,.32944,.40695,.49091,.61365,2.96106,3.79788,5.52208,7.88004,7.68105,12.16858-.61017-4.7662,.29066-10.50821,1.82642-14.20959,1.74818-4.21732,5.02492-7.76913,7.91045-11.41501,3.466-4.37924,10.57336-2.46805,11.18402,3.08331,.00592,.05374,.01166,.10745,.0173,.16119-.42859,.24179-.84848,.49866-1.25864,.76993-2.33948,1.54724-1.53094,5.17386,1.24106,5.60175l.06277,.00967c-.15503,1.54367-.41983,3.07443-.80734,4.57938,3.70178,14.3158-4.2901,19.52991-15.70148,19.76413-.25192,.12915-.49738,.25833-.7493,.3811,1.15616,3.25525,2.07983,6.59448,2.7644,9.97891,.61359,2.99042,1.03992,6.01318,1.27884,9.04886,.29715,3.83008,.2713,7.67957-.05167,11.50323l.01938-.13562c.82025-4.21112,3.10672-8.14459,6.42661-10.8703,4.94562-4.06265,11.93283-5.55869,17.26825-8.82425,2.56833-1.57196,5.85944,.45944,5.41122,3.43707l-.02182,.14261c-.79443,.32288-1.56946,.69754-2.3187,1.11734-.42859,.24185-.84848,.49866-1.25864,.76993-2.33948,1.5473-1.53094,5.17395,1.24106,5.60181l.06281,.00964c.0452,.00647,.08398,.01294,.12912,.01947-1.36282,3.23584-3.26169,6.2392-5.63855,8.82922-2.31464,12.49713-12.25604,13.6828-22.89023,10.04352h-.00647c-1.1626,5.06378-2.86128,10.01129-5.0444,14.7262h-18.02019c-.06464-.2002-.12274-.40692-.18089-.60718,1.6664,.10339,3.3457,.00647,4.9863-.297-1.33701-1.64056-2.67397-3.29407-4.01097-4.93463-.03229-.03229-.05817-.06458-.08397-.09686-.67818-.8396-1.36282-1.67285-2.04099-2.51245l-.00037-.00104c-.04245-2.57758,.26653-5.14661,.87875-7.63983l.00056-.00037,.00003-.00006Z" fill="#f2f2f2"/><path d="M77.50866,266.55573c5.46346,.34219,8.48295-6.44582,4.34948-10.40202l-.41124-1.63478c.05415-.1309,.10855-.26181,.16339-.39239,5.52512-13.17475,24.2505-13.08388,29.72865,.11041,4.86229,11.71058,11.05275,23.44118,12.577,35.82324,.6833,5.46572,.37589,11.03411-.83696,16.39766,11.39297-24.88695,17.38844-52.06255,17.38844-79.39198,0-6.86662-.37585-13.73323-1.14441-20.58258-.63209-5.6026-1.50315-11.1709-2.63061-16.68812-6.09773-29.82332-19.30146-58.2288-38.34659-81.95423-9.15544-5.00481-16.79053-12.82788-21.40239-22.20517-1.65681-3.38214-2.95501-7.02036-3.56994-10.72686,1.04191,.13664,3.92868-15.73167,3.14285-16.70523,1.45202-2.20335,4.05091-3.29869,5.63674-5.4487,7.88694-10.69304,18.75318-8.82599,24.42579,5.70502,12.11807,6.11597,12.23533,16.25901,4.79978,26.01417-4.73053,6.20636-5.38054,14.60421-9.53124,21.24857,.42714,.54662,.87122,1.07621,1.29823,1.62283,7.83073,10.04377,14.60353,20.83931,20.31306,32.18066-1.61363-12.60456,.76868-27.7897,4.83009-37.57827,4.6232-11.15299,13.28875-20.54602,20.91973-30.18779,9.16609-11.58121,27.962-6.52693,29.57693,8.15404,.01566,.14212,.03083,.28417,.04576,.42629-1.13343,.63943-2.24387,1.31873-3.32855,2.03613-6.18691,4.09179-4.04869,13.68263,3.28207,14.81421l.16601,.02558c-.40999,4.08235-1.11027,8.13055-2.13507,12.11048,9.78962,37.85913-11.34547,51.64821-41.52366,52.26763-.66623,.34155-1.31534,.68318-1.98157,1.00785,3.05754,8.60873,5.50027,17.43957,7.31066,26.38993,1.62267,7.90837,2.75013,15.90229,3.38198,23.93034,.78583,10.12891,.71748,20.30915-.13664,30.42111l.05125-.35866c2.16921-11.1366,8.21594-21.53895,16.99561-28.74727,13.07903-10.74397,31.55721-14.70033,45.6671-23.33635,6.79213-4.15716,15.49569,1.21503,14.31036,9.08958l-.0577,.37714c-2.10094,.85387-4.15054,1.84469-6.13195,2.95488-1.13343,.63959-2.24387,1.31873-3.32855,2.03613-6.18691,4.09195-4.04869,13.68287,3.28207,14.81437l.16609,.0255c.11953,.01711,.2221,.03422,.34147,.05149-3.60408,8.55741-8.62576,16.49999-14.91154,23.3495-6.12122,33.04954-32.41196,36.18512-60.53481,26.56079h-.01711c-3.07457,13.39153-7.56686,26.47556-13.34028,38.94446h-47.65565c-.17094-.52943-.3246-1.07613-.47838-1.60572,4.4069,.27343,8.84795,.01711,13.18661-.78543-3.53581-4.33859-7.07149-8.71139-10.60729-13.04998-.08539-.08539-.15383-.17077-.22206-.25616-1.79349-2.22038-3.60408-4.42397-5.39753-6.64435l-.00097-.00274c-.11226-6.81658,.70484-13.61056,2.32393-20.20407l.00149-.00097,.00008-.00016Z" fill="#f2f2f2"/><path d="M654.81,26.84947H250v2h269.82001c19.16998,0,37.52002,3.46002,54.47998,9.79999h.01001c2.33002,.87,4.62,1.78998,6.89001,2.77002,5.23999,2.23999,10.32001,4.76996,15.23999,7.56,3.06,1.72998,6.06,3.57001,8.97998,5.5,6.23999,4.10999,12.16003,8.65997,17.72003,13.60999l.01001,.01001c.25,.21002,.48999,.41998,.72998,.64996,31.69,28.49005,51.62,69.81006,51.62,115.78003v112.63c0,.23999,0,.47998-.01001,.71997-.27997,8.26001-5.39996,15.15002-12.20001,13.42004-11.58997-2.96002-23.35999-5.13-35.32001-5.13H71.19c-23.15997,0-46.70001,2.20996-68.21002,10.81-.71997,.28998-1.38995,.10999-2.04999-.10004-.31-.09998-.62-.19995-.92999-.31995v2.10999c2.26001,.76001,4.66998,1.17999,7.19,1.17999H654.81c12.25,0,22.27002-9.77002,22.66998-21.91998,.02002-.26001,.02002-.51001,.02002-.77002V49.53947c0-12.51001-10.17999-22.69-22.69-22.69Z" fill="#e6e6e6"/><g><polygon points="261.1483 480.08779 245.96467 482.37354 229.91947 424.89638 252.32903 421.52214 261.1483 480.08779" fill="#ffb6b6"/><path d="M264.06881,495.84658l-46.69146,7.03187-.08894-.59042c-1.51128-10.0367,5.39935-19.39843,15.43586-20.91092l.00112-.00017,7.55402-7.75508,16.88758,4.0742,4.07587-.6139,2.82594,18.76442Z" fill="#2f2e41"/></g><g><polygon points="387.37228 467.83751 373.60654 474.63984 340.81533 424.78195 361.13201 414.74173 387.37228 467.83751" fill="#ffb6b6"/><path d="M394.9544,481.95772l-42.3304,20.92072-.26457-.53527c-4.49681-9.09934-.76636-20.12125,8.33243-24.61916l.00102-.0005,4.83268-9.68761,17.32607-1.26368,3.69515-1.82631,8.40761,17.0118Z" fill="#2f2e41"/></g><path d="M419.84648,310.31851l.25271-94.04862,22.39906-5.92949-6.50761,99.58661c1.84587,1.46847,3.3047,3.46626,4.10171,5.8725,2.18331,6.59096-1.38984,13.70392-7.98091,15.88716-6.59096,2.18331-13.70383-1.38986-15.88714-7.98082-1.63365-4.93197-.04306-10.15501,3.62217-13.38733Z" fill="#ffb6b6"/><path d="M276.89536,285.54074l4.11477-93.95891,22.62367-5.00463-10.59182,99.23535c1.78401,1.54304,3.15956,3.59905,3.85709,6.03599,1.9108,6.67506-1.95144,13.63528-8.62661,15.54601-6.67506,1.9108-13.63519-1.95146-15.54599-8.62652-1.42973-4.9949,.37401-10.14821,4.16889-13.22729Z" fill="#ffb6b6"/><path d="M339.38635,319.23486l-58.33201,19.14138-34.16895,11.20804c14.33879,25.12109,13.07399,102.41718,11.95943,108.8352h-29.84482c-.28804-5.76684-21.42425-81.19072-27.67948-115.3534-8.13994-44.45657,30.05515-55.72725,30.05515-55.72725l55.16997-21.96531,34.58846-8.71598,27.33141-6.88764c1.23976,2.34179,2.31676,4.62725,3.24971,6.86257,.00627,.00627,.00627,.0188,.01254,.02507,16.54284,39.61641-12.34141,62.57732-12.34141,62.57732Z" fill="#2f2e41"/><path d="M415.46343,283.61951c-.83906,12.86735-6.19889,21.57707-6.19889,21.57707l-76.63433,60.03516c15.38448,13.08653,52.48499,77.62827,55.75973,86.18775l-33.38995,5c-3.66299-6.7812-61.70446-71.99001-67.43374-81.80175-7.42612-12.71712-8.47177-25.19626-6.51193-36.2415,4.05116-22.8607,21.00102-39.59769,21.00102-39.59769l42.03964-38.58329,7.56385-3.53772,.05637-.02507,42.43412-19.84266c7.32591,6.64974,12.3226,13.3683,15.64119,19.86773,3.66296,7.17564,5.27216,14.08208,5.67291,20.31854,.15027,2.31672,.13773,4.53331,0,6.64343Z" fill="#2f2e41"/><path d="M377.8945,83.84045l-41.95197-1.2523-12.52298,15.02757c-12.04251,1.40169-22.62991,6.07044-31.30744,15.02757,0,0,6.89308,18.44463,5.00919,57.60569-.98215,20.4163,3.6584,58.01871,3.13074,72.63327-.46997,13.01693,1.49106,18.82312,1.87845,18.78447,1.65658-.1653,9.39223-4.38304,25.04595,.62615,15.65372,5.00919,84.16385-5.69976,84.16385-5.69976l-4.64295-29.99073,5.78918-18.83479,2.35075-100.1335c-13.14913-5.63534-20.03676-7.51379-32.55974-7.51379l-4.38304-16.27987Z" fill="#8ab4f8"/><path d="M401.87058,115.37854l12.34056-7.74443s22.54136-3.75689,20.66291,39.44738c0,0,12.35091,31.12429,11.6004,58.26621-.04652,1.68233-1.72969,4.17383-.29665,4.99274,3.04388,1.73944,1.59851,3.38806-.65924,4.99127l-28.30743,6.31439c-2.52454-2.37726-3.80914-4.5993-1.77393-6.40594-2.29211-.8299-2.87329-1.9776-.99213-3.58252-1.04913-.19696-1.53033-.82959-.68646-2.47882l-13.94889-29.53759,2.06087-64.26269Z" fill="#8ab4f8"/><path d="M306.31177,118.24338l-13.33997-5.85754s-22.84839-.42185-14.67528,42.04388c0,0-6.8761,29.22499-3.60811,55.03169,.07235,.57133,.6009,1.26929,.23212,1.70862-1.24396,1.48193-1.3938,2.94458,.75018,4.37518,.74371,.49622,1.00317,1.83759,.56702,2.60693-1.40442,2.47729-.4126,4.091,1.50421,5.35065l33.35575,11.56322,8.83592-69.80326-13.62184-47.01937Z" fill="#8ab4f8"/><circle cx="352.69578" cy="43.87179" r="35.48022" fill="#ffb6b6"/><path d="M385.98823,67.56476c-.42932,.80487-1.68294,1.89079-3.37366,3.09479-1.92269,1.36823-4.4045,2.88327-6.86768,4.33076,0,0-8.92416-.96614-5.41189-5.69275,.39347-.52434,.76166-1.10744,1.09664-1.72046,1.22609-2.26566,1.82355-4.92245,.27012-6.81318-1.15042-1.39586-3.32876-1.80959-4.90988-.92809-1.57842,.87193-.99605,.86651-1.6034,.6991-1.48025-1.70463-3.87674-.91302-3.87674-.91302,0,0,1.85762-4.21802,3.32717-6.01201,1.4792-1.79133,2.99924-3.76849,3.1493-6.08174,.15512-2.2186-.97155-4.30288-2.05826-6.23098-1.1775-2.08798-2.34801-4.16364-3.52551-6.25162-.39805-.70098-.79339-1.41154-1.22835-2.09161-4.21633-6.68059-17.91427,.11375-25.81143-.17513-7.8945-.29853-10.55578-9.91131-15.25212-3.56095-1.13623-5.02247-1.98867-8.92943-3.11541-13.23362-1.02868-3.94516,3.39173-7.18707,6.75954-4.87922,.02629,.01763,.04287,.03258,.06916,.05021,.47256-.58548,.82081-1.24669,1.049-1.96176,.15748-.496,.40603-.94614,.70878-1.32949,1.12835,.79858,2.25938,1.58745,3.37813,2.38338-.2077-1.35387-.65675-2.66017-1.29989-3.86436,.98585-.34029,2.09445-.33551,3.13697,.09708l1.87397,.76548c.56536-.50805,.97841-1.14108,1.25484-1.84285,.74281-1.94239,2.65629-3.12652,4.72823-2.92883,3.34512,.3204-1.07097-.41362,2.26396-1.18518,5.10857-1.18512,10.79323-2.3152,15.33719,.3169,6.8006,3.92833,11.943,6.81385,23.943,7.81385,6,4,8.58207,13.62392,10.42403,18.45713,1.46573,3.82706,2.55994,11.41049,1.00335,15.21354-3.92544,9.61255-.58519,15.29439-5.43914,24.47462Z" fill="#2f2e41"/><path d="M469.505,486.2561c2.06592,.12937,3.20768-2.43737,1.64468-3.93333l-.1555-.61819c.02047-.04951,.04105-.09897,.06178-.14839,2.08924-4.9818,9.16992-4.94742,11.24139,.04177,1.83859,4.42817,4.17942,8.86389,4.75579,13.54594,.25838,2.0668,.14213,4.17236-.31648,6.20047,4.30807-9.41059,6.57515-19.68661,6.57515-30.02077,0-2.59652-.14213-5.19301-.43275-7.78295-.239-2.11854-.56839-4.2241-.99471-6.31034-2.30575-11.2772-7.29852-22.01825-14.50012-30.98962-3.46197-1.89248-6.34906-4.85065-8.09295-8.39652-.62649-1.27891-1.11739-2.65462-1.34991-4.05618,.39398,.05168,1.48556-5.94866,1.18841-6.3168,.54906-.83317,1.53178-1.24733,2.13144-2.06034,2.98232-4.04341,7.0912-3.33741,9.23621,2.15727,4.58224,2.31266,4.62659,6.14806,1.81495,9.83683-1.78878,2.34682-2.03456,5.52233-3.60408,8.03478,.16151,.20671,.32944,.40695,.4909,.61366,2.96106,3.79788,5.52208,7.88002,7.68104,12.16859-.61017-4.76621,.29067-10.50822,1.82641-14.20959,1.74819-4.21732,5.02491-7.76915,7.91045-11.41501,3.46601-4.37924,10.57337-2.46806,11.18401,3.08332,.00591,.05375,.01166,.10745,.01731,.1612-.4286,.24178-.84849,.49867-1.25864,.76992-2.33949,1.54723-1.53096,5.17386,1.24107,5.60174l.06277,.00967c-.15503,1.54366-.41984,3.07444-.80734,4.57937,3.70179,14.31579-4.29011,19.5299-15.70147,19.76412-.25191,.12916-.49738,.25832-.74929,.38109,1.15617,3.25525,2.07982,6.59447,2.76441,9.97891,.61359,2.99043,1.03991,6.01317,1.27885,9.04888,.29715,3.83006,.27129,7.67959-.05168,11.50323l.01939-.13562c.82024-4.21115,3.10671-8.14462,6.4266-10.87028,4.94561-4.06264,11.93282-5.55869,17.26826-8.82425,2.56833-1.57196,5.85945,.45945,5.41121,3.43708l-.02182,.14261c-.79443,.32289-1.56947,.69755-2.31871,1.11733-.4286,.24184-.84848,.49867-1.25864,.76992-2.33949,1.54729-1.53096,5.17392,1.24107,5.6018l.06282,.00965c.0452,.00646,.08397,.01295,.12911,.01944-1.36282,3.23581-3.26168,6.23922-5.63854,8.82922-2.31463,12.49713-12.25603,13.68282-22.89022,10.04354h-.00648c-1.16259,5.06378-2.86128,10.01127-5.0444,14.72621h-18.02019c-.06463-.20022-.12274-.40692-.18089-.60717,1.6664,.10341,3.34571,.00649,4.98629-.29702-1.33701-1.64059-2.67396-3.29409-4.01097-4.93462-.03229-.0323-.05816-.0646-.08397-.09689-.67817-.8396-1.36282-1.67283-2.04099-2.51246l-.00036-.00102c-.04245-2.57755,.26652-5.14662,.87876-7.63984l.00057-.00035Z" fill="#f2f2f2"/><path d="M137.95364,502.39905c0,.66003,.53003,1.19,1.19006,1.19h383.28998c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H139.14371c-.66003,0-1.19006,.53003-1.19006,1.19Z" fill="#ccc"/></svg>
      </div>
    </div>
  );
};

export default Login;

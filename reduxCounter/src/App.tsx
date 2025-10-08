import { useDispatch, useSelector } from "react-redux";
import { increment, reset, descrement } from "./Features/CounterSlice";
import type { RooteState } from "./Store/Store";
import { Plus, RotateCcw, Minus } from "lucide-react";

export default function App() {
  const Dispatch = useDispatch();
  const count = useSelector((state: RooteState) => state.count);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(74,222,128,0.1),transparent_50%)]"></div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
               Counter App
              </h1>
              <p className="text-slate-300 text-sm sm:text-base">
                Track your count with style
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  {count}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  Dispatch(increment());
                }}
                className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  <span>Increment</span>
                </div>
              </button>

              <button
                onClick={() => {
                  Dispatch(reset());
                }}
                className="group relative bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-6 rounded-xl border border-white/20 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="flex items-center justify-center gap-2">
                  <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" />
                  <span>Reset</span>
                </div>
              </button>

              <button
                onClick={() => {
                  Dispatch(descrement());
                }}
                className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="flex items-center justify-center gap-2">
                  <Minus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  <span>Decrement</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

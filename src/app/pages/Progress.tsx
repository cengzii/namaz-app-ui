import { Typography } from "@/app/components/ui/Typography";
import { Card } from "@/app/components/ui/Card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mon", prayers: 5 },
  { name: "Tue", prayers: 4 },
  { name: "Wed", prayers: 5 },
  { name: "Thu", prayers: 5 },
  { name: "Fri", prayers: 5 },
  { name: "Sat", prayers: 3 },
  { name: "Sun", prayers: 4 },
];

export function ProgressPage() {
  return (
    <div className="space-y-8 pb-32">
      <header className="pt-4 px-2">
        <Typography as="h1" className="text-3xl font-bold text-white mb-2">
          Your Progress
        </Typography>
        <Typography as="p" className="text-slate-400 text-lg">
          Consistency is key.
        </Typography>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-slate-900 border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-2">
          <Typography as="span" className="text-4xl font-bold text-emerald-400">
            28
          </Typography>
          <Typography as="p" className="text-slate-500 text-sm uppercase tracking-wider font-semibold">
            Prayers This Week
          </Typography>
        </Card>
        
        <Card className="bg-slate-900 border-slate-800 p-6 flex flex-col items-center justify-center text-center space-y-2">
          <Typography as="span" className="text-4xl font-bold text-emerald-400">
            5
          </Typography>
          <Typography as="p" className="text-slate-500 text-sm uppercase tracking-wider font-semibold">
            Day Streak
          </Typography>
        </Card>
      </div>

      <Card className="p-6 bg-slate-900 border-slate-800">
        <Typography as="h3" className="text-xl font-semibold mb-6 text-slate-200">
          Weekly Overview
        </Typography>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                dy={10}
              />
              <YAxis 
                hide 
                domain={[0, 5]} 
              />
              <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#f8fafc' }}
                itemStyle={{ color: '#10b981' }}
              />
              <Bar 
                dataKey="prayers" 
                fill="#10b981" 
                radius={[6, 6, 6, 6]} 
                barSize={12}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

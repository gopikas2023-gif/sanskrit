import React from 'react';
import { useUser } from '../context/UserContext';
import { Award, Flame, Sparkles, Crown } from 'lucide-react';

export const Leaderboard = () => {
  const { xp, streak } = useUser();

  const LEADERBOARD_USERS = [
    { rank: 1, name: 'Ananya Sharma', title: 'वैय्याकरणः (Grammarian)', xp: 1450, streak: 28, avatar: '🪷', badge: '🥇' },
    { rank: 2, name: 'Vikramaditya', title: 'कविः (Poet)', xp: 1120, streak: 19, avatar: '👑', badge: '🥈' },
    { rank: 3, name: 'Rohan Gupta', title: 'अध्येता (Scholar)', xp: 890, streak: 14, avatar: '🪔', badge: '🥉' },
    { rank: 4, name: 'You (आप / You)', title: 'जिज्ञासुः (Seeker)', xp: xp, streak: streak, isUser: true, avatar: '🐘' },
    { rank: 5, name: 'Priya Sundaram', title: 'अध्येता (Scholar)', xp: 110, streak: 2, avatar: '🌺' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4 pb-24">
      
      {/* Header Banner */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>Weekly Scholar League</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-amber-400 mb-2">
          विद्वत् सभा (Sanskrit Leaderboard)
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Compete with learners worldwide, earn XP by completing lessons, and climb the Sanskrit ranks!
        </p>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-3 mb-8 items-end max-w-xl mx-auto">
        
        {/* Silver Rank 2 */}
        <div className="glass-card rounded-3xl p-4 border border-slate-700 text-center shadow-lg">
          <div className="text-3xl mb-1">🥈</div>
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center text-xl mb-2">
            {LEADERBOARD_USERS[1].avatar}
          </div>
          <div className="font-bold text-xs sm:text-sm text-slate-200 truncate">{LEADERBOARD_USERS[1].name}</div>
          <div className="text-xs font-bold text-amber-400 mt-1">{LEADERBOARD_USERS[1].xp} XP</div>
        </div>

        {/* Gold Rank 1 */}
        <div className="glass-card rounded-3xl p-5 border border-amber-400 text-center shadow-2xl scale-105 bg-gradient-to-b from-amber-900/40 to-slate-900">
          <Crown className="w-7 h-7 text-amber-400 mx-auto mb-1 animate-bounce" />
          <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-2xl mb-2">
            {LEADERBOARD_USERS[0].avatar}
          </div>
          <div className="font-bold text-sm text-amber-200 truncate">{LEADERBOARD_USERS[0].name}</div>
          <div className="text-xs text-amber-400/80 font-mono">{LEADERBOARD_USERS[0].title}</div>
          <div className="text-sm font-extrabold text-amber-300 mt-1.5">{LEADERBOARD_USERS[0].xp} XP</div>
        </div>

        {/* Bronze Rank 3 */}
        <div className="glass-card rounded-3xl p-4 border border-amber-700/50 text-center shadow-lg">
          <div className="text-3xl mb-1">🥉</div>
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 border-2 border-amber-700 flex items-center justify-center text-xl mb-2">
            {LEADERBOARD_USERS[2].avatar}
          </div>
          <div className="font-bold text-xs sm:text-sm text-slate-200 truncate">{LEADERBOARD_USERS[2].name}</div>
          <div className="text-xs font-bold text-amber-400 mt-1">{LEADERBOARD_USERS[2].xp} XP</div>
        </div>

      </div>

      {/* Leaderboard List */}
      <div className="glass-card rounded-3xl p-4 border border-amber-500/30 divide-y divide-slate-800">
        {LEADERBOARD_USERS.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all ${
              user.isUser
                ? 'bg-amber-500/20 border border-amber-400/60 shadow-lg shadow-amber-500/10'
                : 'hover:bg-slate-800/50'
            }`}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                user.rank === 1 ? 'bg-amber-400 text-slate-950' :
                user.rank === 2 ? 'bg-slate-300 text-slate-950' :
                user.rank === 3 ? 'bg-amber-700 text-slate-950' : 'text-slate-400 bg-slate-800'
              }`}>
                {user.rank}
              </span>

              <div className="text-xl sm:text-2xl">{user.avatar}</div>

              <div>
                <div className="font-bold text-sm sm:text-base text-slate-100 flex items-center gap-2">
                  <span>{user.name}</span>
                  {user.isUser && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold uppercase">
                      YOU
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-400">{user.title}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs sm:text-sm font-bold">
              <div className="flex items-center gap-1 text-orange-400">
                <Flame className="w-4 h-4 fill-orange-500" />
                <span>{user.streak}d</span>
              </div>
              <div className="flex items-center gap-1 text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-xl">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{user.xp} XP</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

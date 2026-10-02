import { useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Database,
  Filter,
  Lightbulb,
  Search,
  Target,
  Users,
  X,
} from "lucide-react";

import "./L5_DecisionSupport.css";

const recommendations = [
  {
    id: 1,
    priority: "high",
    issue: "Penggunaan kendaraan pribadi masih dominan",
    detail: "27% pola konsumsi berasal dari kategori transportasi.",
    source: "Collective Intelligence",
    recommendation: "Perkuat insentif transportasi umum dan program carpool kampus.",
    action: "Pilot program mobilitas rendah karbon",
    status: "recommended",
  },
  {
    id: 2,
    priority: "high",
    issue: "Konsumsi plastik sekali pakai masih tinggi",
    detail: "21% aktivitas terkait konsumsi plastik.",
    source: "Activity Review",
    recommendation: "Perluas titik isi ulang dan kampanye pembatasan plastik sekali pakai.",
    action: "Intervensi pada kantin dan acara kampus",
    status: "recommended",
  },
  {
    id: 3,
    priority: "medium",
    issue: "Partisipasi antar fakultas belum merata",
    detail: "Sebagian fakultas memiliki skor partisipasi di bawah rata-rata.",
    source: "Faculty Pattern",
    recommendation: "Gunakan challenge per fakultas untuk meningkatkan keterlibatan.",
    action: "Challenge berbasis fakultas",
    status: "review",
  },
  {
    id: 4,
    priority: "medium",
    issue: "Awareness lebih tinggi daripada perubahan perilaku",
    detail: "Terdapat gap antara pemahaman dan aksi berkelanjutan.",
    source: "Behavioral Trend",
    recommendation: "Tambahkan nudging dan feedback mingguan yang lebih personal.",
    action: "Optimasi feedback mahasiswa",
    status: "monitoring",
  },
  {
    id: 5,
    priority: "supporting",
    issue: "Aktivitas digital belum banyak dicatat",
    detail: "Kategori digital memiliki proporsi pencatatan terendah.",
    source: "Campus Pattern",
    recommendation: "Perjelas contoh aktivitas digital berkelanjutan di tracker.",
    action: "Perbaikan taxonomy aktivitas",
    status: "monitoring",
  },
];

const priorityLabels = {
  high: "High",
  medium: "Medium",
  supporting: "Supporting",
};

const statusLabels = {
  recommended: "Recommended",
  review: "Under Review",
  monitoring: "Monitoring",
};

export default function L5DecisionSupport() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter((item) => {
      const matchesTab = activeTab === "all" || item.priority === activeTab;
      const haystack = `${item.issue} ${item.recommendation} ${item.action} ${item.source}`.toLowerCase();
      const matchesSearch = haystack.includes(search.toLowerCase().trim());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  const countPriority = (priority) =>
    recommendations.filter((item) => item.priority === priority).length;

  return (
    <div className="l5-page">
      <section className="l5-header">
        <div className="l5-header-copy">
          <span className="l5-eyebrow">LAYER 05 · DECISION SUPPORT</span>
          <h1>Institutional Decision Support</h1>
          <p>
            Mengubah temuan kolektif mahasiswa menjadi prioritas intervensi,
            rekomendasi, dan rencana tindak lanjut keberlanjutan kampus.
          </p>
        </div>

        <div className="l5-header-actions">
          <button type="button" className="l5-button l5-button-secondary">
            <BarChart3 size={16} />
            View evidence
          </button>
          <button type="button" className="l5-button l5-button-primary">
            <ArrowUpRight size={16} />
            Export summary
          </button>
        </div>
      </section>

      <section className="l5-flow-card">
        <div className="l5-flow-intro">
          <span className="l5-flow-kicker">BIJAK-M FLOW</span>
          <strong>Data menjadi keputusan</strong>
        </div>

        <div className="l5-flow">
          <div className="l5-flow-step">
            <span className="l5-flow-number">01</span>
            <div className="l5-flow-icon"><Database size={16} /></div>
            <div>
              <strong>Activity Data</strong>
              <span>Data mahasiswa</span>
            </div>
          </div>
          <ArrowRight className="l5-flow-arrow" size={16} />
          <div className="l5-flow-step">
            <span className="l5-flow-number">02</span>
            <div className="l5-flow-icon"><Brain size={16} /></div>
            <div>
              <strong>Collective Insight</strong>
              <span>Pola kolektif</span>
            </div>
          </div>
          <ArrowRight className="l5-flow-arrow" size={16} />
          <div className="l5-flow-step">
            <span className="l5-flow-number">03</span>
            <div className="l5-flow-icon"><Lightbulb size={16} /></div>
            <div>
              <strong>Recommendation</strong>
              <span>Prioritas tindakan</span>
            </div>
          </div>
        </div>
      </section>

      <div className="l5-prototype-notice">
        <div className="l5-prototype-icon"><AlertCircle size={16} /></div>
        <div>
          <strong>Prototype / simulated recommendations</strong>
          <p>
            Rekomendasi pada halaman ini masih berbasis data simulasi. Saat
            database aktif, prioritas dapat dihasilkan dari data aktual ECODAS.
          </p>
        </div>
      </div>

      <section className="l5-kpi-grid">
        <div className="l5-kpi-card l5-kpi-accent">
          <div className="l5-kpi-top">
            <span>Total recommendations</span>
            <div className="l5-kpi-icon"><Lightbulb size={16} /></div>
          </div>
          <strong>{recommendations.length}</strong>
          <small>Institutional recommendations</small>
        </div>

        <div className="l5-kpi-card">
          <div className="l5-kpi-top">
            <span>High priority</span>
            <div className="l5-kpi-icon"><Target size={16} /></div>
          </div>
          <strong>{countPriority("high")}</strong>
          <small>Needs immediate attention</small>
        </div>

        <div className="l5-kpi-card">
          <div className="l5-kpi-top">
            <span>Student coverage</span>
            <div className="l5-kpi-icon"><Users size={16} /></div>
          </div>
          <strong>1,284</strong>
          <small>Students represented</small>
        </div>

        <div className="l5-kpi-card">
          <div className="l5-kpi-top">
            <span>Evidence confidence</span>
            <div className="l5-kpi-icon"><CheckCircle2 size={16} /></div>
          </div>
          <strong>82%</strong>
          <small>Simulated evidence readiness</small>
        </div>
      </section>

      <section className="l5-control-panel">
        <div className="l5-tabs">
          {[
            ["all", "All", recommendations.length],
            ["high", "High", countPriority("high")],
            ["medium", "Medium", countPriority("medium")],
            ["supporting", "Supporting", countPriority("supporting")],
          ].map(([key, label, count]) => (
            <button
              type="button"
              key={key}
              className={`l5-tab ${activeTab === key ? "l5-tab-active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
              <span>{count}</span>
            </button>
          ))}
        </div>

        <div className="l5-controls">
          <label className="l5-search">
            <Search size={14} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search recommendation..."
            />
            {search && (
              <button
                type="button"
                className="l5-clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </label>

          <button type="button" className="l5-filter-button">
            <Filter size={14} />
            Filter
            <span>Prototype</span>
          </button>
        </div>
      </section>

      <section className="l5-decision-section">
        <div className="l5-section-heading">
          <div>
            <span className="l5-section-kicker">RECOMMENDATION REGISTER</span>
            <h2>Priority interventions</h2>
            <p>Rekomendasi disusun dari pola kolektif dan aktivitas mahasiswa.</p>
          </div>
          <span className="l5-result-count">
            {filteredRecommendations.length} result(s)
          </span>
        </div>

        <div className="l5-decision-table-wrapper">
          {filteredRecommendations.length > 0 ? (
            <table className="l5-decision-table">
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Issue</th>
                  <th>Source</th>
                  <th>Recommendation</th>
                  <th>Proposed action</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecommendations.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span className={`l5-priority-badge ${item.priority}`}>
                        <span />
                        {priorityLabels[item.priority]}
                      </span>
                    </td>
                    <td>
                      <div className="l5-issue-cell">
                        <strong>{item.issue}</strong>
                        <span>{item.detail}</span>
                      </div>
                    </td>
                    <td><span className="l5-source">{item.source}</span></td>
                    <td className="l5-recommendation-cell">{item.recommendation}</td>
                    <td>
                      <div className="l5-action-cell">
                        <ArrowUpRight size={13} />
                        {item.action}
                      </div>
                    </td>
                    <td>
                      <span className={`l5-status-badge ${item.status}`}>
                        {statusLabels[item.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="l5-empty">
              <Search size={22} />
              <strong>No recommendation found</strong>
              <p>Try a different search term or priority filter.</p>
            </div>
          )}
        </div>
      </section>

      <section className="l5-lower-grid">
        <div className="l5-panel">
          <div className="l5-panel-heading">
            <div>
              <span className="l5-section-kicker">PRIORITY MATRIX</span>
              <h3>Impact × urgency</h3>
            </div>
          </div>

          <div className="l5-matrix">
            <div className="l5-matrix-y-label">Impact</div>
            <div className="l5-matrix-area">
              <div className="l5-matrix-row">
                <div className="l5-matrix-cell"><strong>0</strong><span>Monitor</span></div>
                <div className="l5-matrix-cell"><strong>1</strong><span>Plan</span></div>
                <div className="l5-matrix-cell strong"><strong>2</strong><span>Priority</span></div>
              </div>
              <div className="l5-matrix-row">
                <div className="l5-matrix-cell"><strong>1</strong><span>Monitor</span></div>
                <div className="l5-matrix-cell strong"><strong>1</strong><span>Develop</span></div>
                <div className="l5-matrix-cell"><strong>0</strong><span>Escalate</span></div>
              </div>
              <div className="l5-matrix-axis">
                <span>Low</span><span>Urgency</span><span>High</span>
              </div>
            </div>
          </div>
        </div>

        <div className="l5-panel">
          <div className="l5-panel-heading">
            <div>
              <span className="l5-section-kicker">NEXT ACTIONS</span>
              <h3>Recommended follow-up</h3>
            </div>
          </div>

          <div className="l5-action-list">
            {[
              ["01", "Validate mobility intervention with campus operations", "High priority"],
              ["02", "Review plastic reduction policy with canteen managers", "High priority"],
              ["03", "Prepare faculty-based sustainability challenge", "Medium priority"],
            ].map(([number, title, meta]) => (
              <div className="l5-action-item" key={number}>
                <div className="l5-action-number">{number}</div>
                <div className="l5-action-main">
                  <strong>{title}</strong>
                  <span>{meta}</span>
                </div>
                <ArrowRight size={15} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import './style.css';

interface Member {
  id: number;
  name: string;
  income: number;
  companies: { name: string; income: number }[];
}

const FamilyList = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const familyMembers: Member[] = [
    {
      id: 1,
      name: 'John Doe',
      income: 5000,
      companies: [
        { name: 'Company A', income: 1000 },
        { name: 'Company B', income: 2000 },
      ],
    },
    // { id: 2, name: 'Oleg Doe', income: 5000, companies: [] },
    // { id: 3, name: 'Sanya Doe', income: 5000, companies: [] },
    // { id: 4, name: 'Rat Doe', income: 5000, companies: [] },
    // { id: 5, name: 'John Doe', income: 5000, companies: [] },
  ];

  const companyIncomes = [
    { id: 1, name: 'Company A', income: 15000 },
    { id: 2, name: 'Company B', income: 12000 },
    { id: 3, name: 'Company C', income: 10000 },
  ];

  const handleMemberClick = (member: Member) => {
    if (selectedMember && selectedMember.id === member.id) {
      setSelectedMember(null);
    } else {
      setSelectedMember(member);
    }
  };

  return (
    <div className="family-list-container">
      <header className="family-list-header">
        <h1>Название семьи</h1>
        <button>Добавить члена семьи</button>
        <div className="family-icons">
          <div className="family-icon">
            <span>{familyMembers.length}</span>
            <span>Члены семьи</span>
          </div>
          <div className="family-icon">
            <span>{familyMembers.reduce((total, member) => total + member.income, 0)}</span>
            <span>Доход семьи</span>
          </div>
        </div>
      </header>
      <div className="family-list-body-container">
        <div className="family-list-body">
          <table className="family-table">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Доход</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((member) => (
                <React.Fragment key={member.id}>
                  <tr onClick={() => handleMemberClick(member)}>
                    <td>{member.name}</td>
                    <td>{member.income}</td>
                    <td>
                      <button>Удалить</button>
                    </td>
                  </tr>
                  {selectedMember && selectedMember.id === member.id && (
                    <tr>
                      <td colSpan={3}>
                        <div className="member-details">
                          {/* <h3>{selectedMember.name}</h3> */}
                          <div>
                            <h4>Компании:</h4>
                            <ul>
                              {selectedMember.companies.map((company, index) => (
                                <li key={index}>
                                  {company.name} - {company.income}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <button onClick={() => handleMemberClick(member)}>Закрыть</button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="company-incomes">
          <h4>Доходы компаний</h4>
          {companyIncomes.map((company) => (
            <div key={company.id} className="company-income">
              <div className="company-name">{company.name}</div>
              <div className="company-income-value">{company.income}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyList;

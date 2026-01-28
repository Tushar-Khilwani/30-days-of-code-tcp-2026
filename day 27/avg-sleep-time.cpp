#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    long long sum = 0;
    for (int i = 0; i < k; i++) sum += a[i];

    long double total = sum;

    for (int i = k; i < n; i++) {
        sum += a[i];
        sum -= a[i - k];
        total += sum;
    }

    long double ans = total / (n - k + 1);
    cout << fixed << setprecision(10) << ans;
    return 0;
}
